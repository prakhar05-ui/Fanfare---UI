import React from 'react';
import { Search } from 'lucide-react';
import { useToast } from '../../hooks/useToast';
import styles from './SearchBar.module.css';

export const SearchBar = ({ placeholder = "Search..." }) => {
  const { showToast } = useToast();

  const handleTap = () => {
    showToast("Search coming in Sprint 2");
  };

  return (
    <div className={styles.searchContainer} onClick={handleTap}>
      <Search size={18} className={styles.icon} />
      <input 
        type="text" 
        className={styles.input} 
        placeholder={placeholder} 
        readOnly
      />
    </div>
  );
};
