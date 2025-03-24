import { createContext } from 'react';

import { IAuthContext } from '@/shared/context/interfaces/IAuthContext.ts';

export const AuthContext = createContext<IAuthContext>({
  token: null,
  user: null,
  isAuth: false
});
