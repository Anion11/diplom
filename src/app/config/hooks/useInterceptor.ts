import { InternalAxiosRequestConfig } from 'axios';

import { $api } from '@/shared/api/api.ts';

const useInterceptor = () => {
  $api.interceptors.request.use(config => {
    const token = localStorage.getItem('authToken');
    if (token && config) {
      return {
        ...config,
        headers: {
          ...config.headers,
          Authorization: `Bearer ${token}`
        }
      } as InternalAxiosRequestConfig;
    }
    return config;
  });
};

export default useInterceptor;
