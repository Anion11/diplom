import { PropsWithChildren } from 'react';

import { AuthContext } from '@/shared/context/AuthContext.ts';
import useAuth from '@/shared/hooks/useAuth.ts';

const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const { login, isAuth, logout, token, user } = useAuth();

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        isAuth,
        token,
        user
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
