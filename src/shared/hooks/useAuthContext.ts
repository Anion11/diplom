import { useContext } from 'react';

import { AuthContext } from '@/shared/context/AuthContext.ts';

export const useAuthContext = () => useContext(AuthContext);
