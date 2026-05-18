import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, TrendingUp, Compass, MessageSquare, User } from 'lucide-react';
import styles from './BottomNav.module.css';

export const BottomNav = () => {
  return (
    <nav className={styles.nav}>
      <NavLink to="/feed" className={({ isActive }) => `${styles.navItem} ${isActive ? styles.active : ''}`}>
        <Home size={22} />
        <span>Home</span>
      </NavLink>
      <NavLink to="/trending" className={({ isActive }) => `${styles.navItem} ${isActive ? styles.active : ''}`}>
        <TrendingUp size={22} />
        <span>Trending</span>
      </NavLink>
      <NavLink to="/choose-fandoms" className={({ isActive }) => `${styles.navItem} ${isActive ? styles.active : ''}`}>
        <Compass size={22} />
        <span>Fandoms</span>
      </NavLink>
      <NavLink to="/reviews" className={({ isActive }) => `${styles.navItem} ${isActive ? styles.active : ''}`}>
        <MessageSquare size={22} />
        <span>Reviews</span>
      </NavLink>
      <NavLink to="/profile" className={({ isActive }) => `${styles.navItem} ${isActive ? styles.active : ''}`}>
        <User size={22} />
        <span>Profile</span>
      </NavLink>
    </nav>
  );
};
