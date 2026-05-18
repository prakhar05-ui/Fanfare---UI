import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ReactionBar } from '../ReactionBar/ReactionBar';
import { Share2, MoreHorizontal } from 'lucide-react';
import { useToast } from '../../hooks/useToast';
import styles from './NewsCard.module.css';

export const NewsCard = ({ article, index }) => {
  const { showToast } = useToast();
  const timerRef = useRef(null);

  const getCategoryColor = (category) => {
    switch(category?.toLowerCase()) {
      case 'movies': return 'var(--accent-coral)';
      case 'tv': return 'var(--accent-teal)';
      case 'music':
      case 'gaming': return 'var(--accent-purple)';
      default: return 'var(--accent-gold)';
    }
  };

  const handleTouchStart = () => {
    timerRef.current = setTimeout(() => {
      showToast("Share sheet coming soon!");
    }, 500); // 500ms for long press
  };

  const handleTouchEnd = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
  };

  return (
    <motion.article 
      className={styles.card}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06, duration: 0.4 }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleTouchStart}
      onMouseUp={handleTouchEnd}
      onMouseLeave={handleTouchEnd}
    >
      <div className={styles.imageArea} style={{ background: article.gradient || 'var(--border)' }}>
        {article.emoji ? (
          <span className={styles.cardEmoji}>{article.emoji}</span>
        ) : (
          <img src={article.image} alt="" className={styles.image} />
        )}
      </div>
      
      <div className={styles.content}>
        <div className={styles.header}>
          <span 
            className={styles.categoryTag} 
            style={{ color: getCategoryColor(article.category) }}
          >
            {article.category}
          </span>
          <span className={styles.timestamp}>{article.timestamp}</span>
        </div>
        
        <h2 className={styles.title}>{article.title}</h2>
        
        <div className={styles.actionBar}>
          <ReactionBar initialCounts={{ fire: article.likes % 100, shock: 5, heart: 12 }} />
          
          <div className={styles.actionsRight}>
            <span className={styles.commentCount}>{article.comments}</span>
            <button className={styles.iconBtn} onClick={() => showToast("Share sheet coming soon!")}>
              <Share2 size={16} />
            </button>
            <button className={styles.iconBtn}>
              <MoreHorizontal size={16} />
            </button>
          </div>
        </div>
      </div>
    </motion.article>
  );
};
