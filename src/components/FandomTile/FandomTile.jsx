import React from 'react';
import { motion } from 'framer-motion';
import { useFandoms } from '../../hooks/useFandoms';
import styles from './FandomTile.module.css';

export const FandomTile = ({ fandom }) => {
  const { selectedFandoms, toggleFandom } = useFandoms();
  const isSelected = selectedFandoms.includes(fandom.id);

  return (
    <motion.button 
      whileTap={{ scale: 0.96 }}
      transition={{ duration: 0.2 }}
      className={`${styles.tile} ${isSelected ? styles.selected : ''}`}
      onClick={() => toggleFandom(fandom.id)}
      style={{ background: fandom.gradient }}
    >
      <div className={styles.emojiContainer}>
        <span className={styles.emoji}>{fandom.emoji}</span>
      </div>
      
      <div className={styles.info}>
        <span className={styles.name}>{fandom.name}</span>
        <span className={styles.members}>{fandom.members} members</span>
      </div>

      <div className={styles.checkbox}>
        {isSelected ? (
          <div className={styles.checked}>
            <svg viewBox="0 0 24 24" fill="none" stroke="#0F0E0C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
        ) : (
          <div className={styles.unchecked} />
        )}
      </div>
    </motion.button>
  );
};
