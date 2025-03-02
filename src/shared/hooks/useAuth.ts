import { useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';

import { $api } from '@/shared/api/api.ts';
import { IUserOutput } from '@/shared/config/interfaces/Auth/IUserOutput.ts';

const useAuth = () => {
  const [token, setToken] = useState<string | null>(null);
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [user, setUser] = useState<IUserOutput | null>(null);
  const login = async (access: string) => {
    const req: AxiosResponse<{ user: IUserOutput }> = await $api.get('api/auth/me', {
      headers: {
        Authorization: `Bearer ${access}`
      }
    });

    setUser(req?.data.user);
    setToken(access);
    localStorage.setItem('user', JSON.stringify(req?.data.user));
    localStorage.setItem('authToken', access);
  };

  useEffect(() => {
    const tempToken = localStorage.getItem('authToken');
    const tempUser = localStorage.getItem('user');
    if (tempToken) {
      setToken(tempToken);
    }
    if (tempUser) {
      setUser(JSON.parse(tempUser));
    }
  }, []);

  const logout = () => {
    setToken(null);
    setIsAuth(false);
    setUser(null);

    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
  };

  return { token, isAuth, logout, login, user };
};

export default useAuth;
