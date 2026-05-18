import React from 'react';
import styles from './CategoryTab.module.css';

export const CategoryTab = ({ label, active = false, onClick }) => {
  return (
    <button 
      className={`${styles.tab} ${active ? styles.active : ''}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
