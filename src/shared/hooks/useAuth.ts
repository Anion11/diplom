import { useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';

import { $api } from '@/shared/api/api.ts';
import { IUserOutput } from '@/shared/config/interfaces/Auth/IUserOutput.ts';

const useAuth = () => {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<IUserOutput | null>(null);
  const [loading, setLoading] = useState(true);

  const login = async (access: string): Promise<void> => {
    setLoading(true);
    try {
      const req: AxiosResponse<IUserOutput> = await $api.get('/auth-api/user/me', {
        headers: {
          Authorization: `Bearer ${access}`
        }
      });

      setUser(req.data);
      setToken(access);
      localStorage.setItem('user', JSON.stringify(req.data));
      localStorage.setItem('authToken', access);
    } catch (e) {
      console.error('Ошибка логина', e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const tempToken = localStorage.getItem('authToken');
    const tempUser = localStorage.getItem('user');
    if (tempToken) setToken(tempToken);

    if (tempUser) setUser(JSON.parse(tempUser));

    setLoading(false);
  }, []);

  const logout = () => {
    setToken(null);
    setUser(null);

    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
  };

  return { token, user, login, logout, loading };
};

export default useAuth;
