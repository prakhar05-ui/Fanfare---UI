import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css';
import App from './App';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import { FandomProvider } from './context/FandomContext';
import { ToastProvider } from './context/ToastContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <FandomProvider>
          <ToastProvider>
            <App />
          </ToastProvider>
        </FandomProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
