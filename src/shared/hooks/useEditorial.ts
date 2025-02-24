import { useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';

import { IUser } from '../config/interfaces/User/IUser';

import { $api } from '@/shared/api/api.ts';

const useEditorial = () => {
  const [loading, setLoading] = useState(false);
  const [members, setMembers] = useState<IUser[]>([]);
  const [membersMain, setMembersMain] = useState<IUser[]>([]);

  const getAllMembers = async () => {
    setLoading(true);
    const res: AxiosResponse<IUser[]> = await $api.get('/api/user/info/find?role=MODERATOR');

    if (res.data) setMembers(res.data);
    setLoading(false);
  };

  const getAllMembersMain = async () => {
    setLoading(true);
    const res: AxiosResponse<IUser[]> = await $api.get('/api/user/info/find?role=RESUMER');

    if (res.data) setMembersMain(res.data);
    setLoading(false);
  };

  useEffect(() => {
    getAllMembers();
    getAllMembersMain();
  }, []);

  return { membersMain, members, loading };
};

export default useEditorial;
