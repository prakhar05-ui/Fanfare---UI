import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../../hooks/useAuth';
import { useToast } from '../../hooks/useToast';
import styles from './LoginPage.module.css';

export const LoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const { showToast } = useToast();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    login();
    
    // Check localStorage for fandoms
    const storedFandoms = localStorage.getItem('fanfare_fandoms');
    if (storedFandoms && JSON.parse(storedFandoms).length >= 3) {
      navigate('/feed');
    } else {
      navigate('/choose-fandoms');
    }
  };

  const handleGoogle = () => {
    showToast("Google OAuth will be integrated in Sprint 2.");
  };

  const handleSignup = () => {
    showToast("Signup coming soon.");
  };

  return (
    <motion.div 
      className={`app-container ${styles.page}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ y: -40, opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className={styles.content}>
        <div className={styles.logoContainer}>
          <h1 className={styles.logo}>Fan<span className={styles.goldText}>fare</span></h1>
          <p className={styles.tagline}>Your Pop Culture Universe.</p>
        </div>
        
        <div className={styles.formContainer}>
          <h2 className={styles.welcome}>Welcome back</h2>
          
          <form onSubmit={handleLogin} className={styles.form}>
            <input 
              type="email" 
              placeholder="Email address" 
              className={styles.input}
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <input 
              type="password" 
              placeholder="Password" 
              className={styles.input}
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
            
            <motion.button 
              whileTap={{ scale: 0.97 }}
              className={styles.loginBtn} 
              type="submit"
            >
              Sign In
            </motion.button>
          </form>

          <div className={styles.divider}>
            <span>or</span>
          </div>

          <motion.button 
            whileTap={{ scale: 0.97 }}
            className={styles.googleBtn} 
            onClick={handleGoogle}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25C22.56 11.47 22.49 10.72 22.36 10H12V14.26H17.92C17.67 15.63 16.86 16.79 15.65 17.6V20.35H19.2C21.28 18.43 22.56 15.6 22.56 12.25Z" fill="#4285F4"/>
              <path d="M12 23C14.97 23 17.46 22.02 19.2 20.35L15.65 17.6C14.7 18.24 13.45 18.63 12 18.63C9.21 18.63 6.84 16.75 5.98 14.22H2.31V17.06C4.1 20.61 7.77 23 12 23Z" fill="#34A853"/>
              <path d="M5.98 14.22C5.76 13.57 5.63 12.89 5.63 12.19C5.63 11.49 5.76 10.81 5.98 10.16V7.32H2.31C1.56 8.81 1.13 10.45 1.13 12.19C1.13 13.93 1.56 15.57 2.31 17.06L5.98 14.22Z" fill="#FBBC05"/>
              <path d="M12 5.38C13.62 5.38 15.06 5.94 16.2 7.02L19.3 3.92C17.45 2.19 14.97 1.13 12 1.13C7.77 1.13 4.1 3.53 2.31 7.32L5.98 10.16C6.84 7.63 9.21 5.38 12 5.38Z" fill="#EA4335"/>
            </svg>
            Continue with Google
          </motion.button>
        </div>

        <div className={styles.footer}>
          <span className={styles.mutedText}>Don't have an account?</span>
          <button className={styles.linkBtn} onClick={handleSignup}>Create account</button>
        </div>
      </div>
    </motion.div>
  );
};
