import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useAuth } from './hooks/useAuth';
import { Toast } from './components/Toast/Toast';

import { LoginPage } from './pages/LoginPage/LoginPage';
import { FandomSelectorPage } from './pages/FandomSelectorPage/FandomSelectorPage';
import { NewsFeedPage } from './pages/NewsFeedPage/NewsFeedPage';
import { ProfilePage } from './pages/ProfilePage/ProfilePage';

// Simple PrivateRoute wrapper
const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/login" element={<LoginPage />} />
        
        <Route path="/choose-fandoms" element={
          <PrivateRoute>
            <FandomSelectorPage />
          </PrivateRoute>
        } />
        
        <Route path="/feed" element={
          <PrivateRoute>
            <NewsFeedPage />
          </PrivateRoute>
        } />
        
        <Route path="/profile" element={
          <PrivateRoute>
            <ProfilePage />
          </PrivateRoute>
        } />

        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <AnimatedRoutes />
      <Toast />
    </Router>
  );
}

export default App;
