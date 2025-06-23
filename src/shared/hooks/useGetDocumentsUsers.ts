import { useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';

import EDocuments from '../config/enums/EDocuments';
import ERoles from '../config/enums/ERoles';
import { IUser } from '../config/interfaces/User/IUser';

import { $api } from '@/shared/api/api.ts';

const BATCH_SIZE = 4;

const useGetDocumentsUsers = () => {
  const [loading, setLoading] = useState(false);
  const [allUsers, setAllUsers] = useState<IUser[]>([]);
  const [visibleUsers, setVisibleUsers] = useState<IUser[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [search, setSearch] = useState('');
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [usersWithUnapprovedPassports, setusersWithUnapprovedPassports] = useState<IUser[]>([]);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const res: AxiosResponse<IUser[]> = await $api.get(
        '/auth-api/admin-api/list?page=0&size=64342146'
      );
      const filtered = res.data.filter(
        user => user.roles?.[0]?.role === ERoles.USER && !user.blocked
      );
      setAllUsers(filtered);
      const filteredUsers = filtered.filter(user =>
        user.person?.documents?.some(doc => doc.type === EDocuments.PASSPORT && !doc.userApproved)
      );
      setusersWithUnapprovedPassports(filteredUsers);
      const initialSlice = filteredUsers.slice(0, BATCH_SIZE);
      setVisibleUsers(initialSlice);
      setCurrentIndex(initialSlice.length);
    } catch (error) {
      console.error('Ошибка при получении пользователей:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateUser = (updatedUser: IUser) => {
    setAllUsers(prevAll => prevAll.map(user => (user.id === updatedUser.id ? updatedUser : user)));
    setVisibleUsers(prevVisible =>
      prevVisible.map(user => (user.id === updatedUser.id ? updatedUser : user))
    );
  };

  const loadMore = () => {
    const nextIndex = currentIndex + BATCH_SIZE;
    const more = usersWithUnapprovedPassports.slice(currentIndex, nextIndex);
    setVisibleUsers(prev => [...prev, ...more]);
    setCurrentIndex(nextIndex);
  };

  const hasMore = !isSearchActive && currentIndex < usersWithUnapprovedPassports.length;

  const handleChange = (value: string) => {
    setSearch(value);
  };

  const searchUsers = (query: string) => {
    const lowerQuery = query.toLowerCase();
    const filtered = usersWithUnapprovedPassports.filter(user =>
      [user.email, user.phone].join(' ').toLowerCase().includes(lowerQuery)
    );

    setIsSearchActive(true);
    setVisibleUsers(filtered);
    setCurrentIndex(filtered.length);
  };

  const clearSearch = () => {
    setSearch('');
    setIsSearchActive(false);
    const initialSlice = usersWithUnapprovedPassports.slice(0, BATCH_SIZE);
    setVisibleUsers(initialSlice);
    setCurrentIndex(initialSlice.length);
  };

  useEffect(() => {
    if (search.trim() === '') {
      clearSearch();
    }
  }, [search]);

  useEffect(() => {
    if (usersWithUnapprovedPassports.length > 0) {
      const initialSlice = usersWithUnapprovedPassports.slice(0, BATCH_SIZE);
      setVisibleUsers(initialSlice);
      setCurrentIndex(initialSlice.length);
    }
  }, [usersWithUnapprovedPassports]);

  useEffect(() => {
    fetchUsers();
  }, []);

  return {
    loading,
    usersWithUnapprovedPassports: visibleUsers,
    loadMore,
    hasMore,
    search,
    handleChange,
    searchUsers,
    fetchUsers,
    updateUser
  };
};

export default useGetDocumentsUsers;
