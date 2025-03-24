import { useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';

import { $api } from '@/shared/api/api.ts';
import { IUserOutput } from '@/shared/config/interfaces/Auth/IUserOutput.ts';

const useAuth = () => {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<IUserOutput | null>(null);
  const [isAuth, setIsAuth] = useState(false);

  const login = async (access: string) => {
    const req: AxiosResponse<IUserOutput> = await $api.get('/api/user/me', {
      headers: {
        Authorization: `Bearer ${access}`
      }
    });
    setUser(req?.data);
    setToken(access);
    localStorage.setItem('user', JSON.stringify(req?.data));
    localStorage.setItem('authToken', access);
    setIsAuth(true);
  };

  useEffect(() => {
    const tempToken = localStorage.getItem('authToken');
    const tempUser = localStorage.getItem('user');
    if (tempToken) setToken(tempToken);

    if (tempUser) setUser(JSON.parse(tempUser));

    if (tempToken && tempUser) setIsAuth(true);
  }, []);

  const logout = () => {
    setToken(null);
    setUser(null);
    setIsAuth(false);

    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
  };

  return { token, user, login, logout, isAuth };
};

export default useAuth;
