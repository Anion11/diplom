import AuthProvider from '@/app/providers/auth-provider/AuthProvider';

interface AppProviderProps {
  children: React.ReactNode;
}

const AppProvider = ({ children }: AppProviderProps) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default AppProvider;
