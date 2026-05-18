import React from 'react';
import styles from './StatBox.module.css';

export const StatBox = ({ label, value }) => {
  return (
    <div className={styles.statBox}>
      <span className={styles.value}>{value}</span>
      <span className={styles.label}>{label}</span>
    </div>
  );
};
