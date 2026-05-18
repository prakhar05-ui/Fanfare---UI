import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useToast } from '../../hooks/useToast';
import styles from './Toast.module.css';

export const Toast = () => {
  const { toast } = useToast();

  return (
    <AnimatePresence>
      {toast && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className={styles.toastContainer}
        >
          <div className={styles.toast}>
            {toast}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
