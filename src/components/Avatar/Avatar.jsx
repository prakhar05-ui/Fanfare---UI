import React from 'react';
import styles from './Avatar.module.css';

export const Avatar = ({ src, alt, size = 'md' }) => {
  return (
    <div className={`${styles.avatarContainer} ${styles[size]}`}>
      {src ? (
        <img src={src} alt={alt} className={styles.image} />
      ) : (
        <div className={styles.placeholder}>{alt ? alt.charAt(0).toUpperCase() : '?'}</div>
      )}
    </div>
  );
};
