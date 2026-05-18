import React from 'react';
import { ReactionBar } from '../ReactionBar/ReactionBar';
import styles from './TrendingCard.module.css';

export const TrendingCard = ({ item, index }) => {
  return (
    <div className={styles.card}>
      <img src={item.image} alt={item.title} className={styles.image} />
      <div className={styles.overlay}>
        <div className={styles.header}>
          <span className={styles.badge}>{item.type}</span>
        </div>
        <div className={styles.footer}>
          <div className={styles.info}>
            <h3 className={styles.title}>{item.title}</h3>
          </div>
          <ReactionBar initialCounts={{ fire: 240, shock: 12, heart: 89 }} />
        </div>
      </div>
    </div>
  );
};
