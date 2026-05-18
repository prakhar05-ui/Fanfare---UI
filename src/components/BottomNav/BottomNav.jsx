import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Compass, User } from 'lucide-react';
import styles from './BottomNav.module.css';

export const BottomNav = () => {
  return (
    <nav className={styles.nav}>
      <NavLink to="/feed" className={({ isActive }) => `${styles.navItem} ${isActive ? styles.active : ''}`}>
        <Home size={22} />
        <span>Home</span>
      </NavLink>
      <NavLink to="/choose-fandoms" className={({ isActive }) => `${styles.navItem} ${isActive ? styles.active : ''}`}>
        <Compass size={22} />
        <span>Fandoms</span>
      </NavLink>
      <NavLink to="/profile" className={({ isActive }) => `${styles.navItem} ${isActive ? styles.active : ''}`}>
        <User size={22} />
        <span>Profile</span>
      </NavLink>
    </nav>
  );
};
