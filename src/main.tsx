import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './app/App.tsx';

import './app/styles/index.scss';

import AuthProvider from '@/app/config/providers/AuthProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
