import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './app/App.tsx';
import AuthProvider from './app/providers/auth-provider/AuthProvider.tsx';

import './app/styles/index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
