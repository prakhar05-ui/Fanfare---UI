import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FandomTile } from '../../components/FandomTile/FandomTile';
import { useFandoms } from '../../hooks/useFandoms';
import { mockFandoms } from '../../mock/fandoms';
import styles from './FandomSelectorPage.module.css';

export const FandomSelectorPage = () => {
  const { selectedFandoms } = useFandoms();
  const navigate = useNavigate();

  const handleConfirm = () => {
    if (selectedFandoms.length >= 3) {
      localStorage.setItem('fanfare_fandoms', JSON.stringify(selectedFandoms));
      navigate('/feed');
    }
  };

  const progressPercentage = Math.min((selectedFandoms.length / 5) * 100, 100);

  return (
    <motion.div 
      className={`app-container ${styles.page}`}
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ x: '-100%', opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className={styles.progressContainer}>
        <div className={styles.progressBar}>
          <motion.div 
            className={styles.progressFill}
            initial={{ width: 0 }}
            animate={{ width: `${progressPercentage}%` }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
        </div>
        <span className={styles.progressText}>{selectedFandoms.length}/5 selected</span>
      </div>

      <header className={styles.header}>
        <span className={styles.step}>Step 2 of 2</span>
        <h1 className={styles.title}>What are you into?</h1>
        <p className={styles.subtitle}>Select at least three fandoms to curate your feed.</p>
      </header>

      <div className={`${styles.grid} hide-scrollbar`}>
        {mockFandoms.map(fandom => (
          <FandomTile key={fandom.id} fandom={fandom} />
        ))}
      </div>

      <div className={styles.footer}>
        <motion.button 
          whileTap={selectedFandoms.length >= 3 ? { scale: 0.97 } : {}}
          className={`${styles.continueBtn} ${selectedFandoms.length < 3 ? styles.disabled : ''}`}
          onClick={handleConfirm}
          disabled={selectedFandoms.length < 3}
        >
          Build My Feed
        </motion.button>
      </div>
    </motion.div>
  );
};
