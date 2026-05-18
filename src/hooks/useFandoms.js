import { useContext } from 'react';
import { FandomContext } from '../context/FandomContext';

export const useFandoms = () => {
  const context = useContext(FandomContext);
  if (!context) {
    throw new Error('useFandoms must be used within a FandomProvider');
  }
  return context;
};
