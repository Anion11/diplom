import { createContext } from 'react';

import { IAuthContext } from '@/shared/context/interfaces/IAuthContext.ts';

export const AuthContext = createContext<IAuthContext>({
  isAuth: false,
  token: null,
  user: null
});
