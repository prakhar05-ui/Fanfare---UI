import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './ReactionBar.module.css';

const reactionVariants = {
  tap: { scale: 1.35 },
  rest: { scale: 1, transition: { type: 'spring', stiffness: 400, damping: 12 } }
};

export const ReactionBar = ({ initialCounts = { fire: 12, shock: 5, heart: 42 } }) => {
  const [counts, setCounts] = useState(initialCounts);

  const handleReact = (type) => {
    setCounts(prev => ({ ...prev, [type]: prev[type] + 1 }));
  };

  const formatCount = (count) => count > 999 ? `${(count / 1000).toFixed(1)}K` : count;

  return (
    <div className={styles.reactionBar}>
      <motion.button
        variants={reactionVariants}
        whileTap="tap"
        animate="rest"
        onClick={(e) => { e.stopPropagation(); handleReact('fire'); }}
        className={styles.reactionBtn}
      >
        🔥 {formatCount(counts.fire)}
      </motion.button>
      
      <motion.button
        variants={reactionVariants}
        whileTap="tap"
        animate="rest"
        onClick={(e) => { e.stopPropagation(); handleReact('shock'); }}
        className={styles.reactionBtn}
      >
        😱 {formatCount(counts.shock)}
      </motion.button>

      <motion.button
        variants={reactionVariants}
        whileTap="tap"
        animate="rest"
        onClick={(e) => { e.stopPropagation(); handleReact('heart'); }}
        className={styles.reactionBtn}
      >
        ❤️ {formatCount(counts.heart)}
      </motion.button>
    </div>
  );
};
