import { PropsWithChildren } from 'react';

import { AuthContext } from '@/shared/context/AuthContext.ts';
import useAuth from '@/shared/hooks/useAuth.ts';

const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const { login, loading, logout, token, user } = useAuth();

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        loading,
        token,
        user
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
