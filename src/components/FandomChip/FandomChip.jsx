import React from 'react';
import styles from './FandomChip.module.css';

export const FandomChip = ({ label, category, active = false, onClick }) => {
  const getCategoryClass = () => {
    switch(category?.toLowerCase()) {
      case 'movies': return styles.coral;
      case 'tv': return styles.teal;
      case 'music':
      case 'gaming': return styles.purple;
      default: return '';
    }
  };

  return (
    <button 
      className={`${styles.chip} ${active ? styles.active : ''} ${active ? getCategoryClass() : ''}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
