import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../../hooks/useAuth';
import { useFandoms } from '../../hooks/useFandoms';
import { Avatar } from '../../components/Avatar/Avatar';
import { StatBox } from '../../components/StatBox/StatBox';
import { BottomNav } from '../../components/BottomNav/BottomNav';
import { FandomChip } from '../../components/FandomChip/FandomChip';
import { mockFandoms } from '../../mock/fandoms';
import { Camera, ChevronRight, LogOut } from 'lucide-react';
import styles from './ProfilePage.module.css';

export const ProfilePage = () => {
  const { user, logout } = useAuth();
  const { selectedFandoms } = useFandoms();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const userFandoms = mockFandoms.filter(f => selectedFandoms.includes(f.id));

  if (!user) return null;

  return (
    <motion.div 
      className={`app-container ${styles.page}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <header className={styles.header}>
        <h1 className={styles.title}>My Profile</h1>
        <button className={styles.editBtn}>Edit Profile</button>
      </header>

      <main className={`${styles.main} hide-scrollbar`}>
        <section className={styles.avatarSection}>
          <div className={styles.avatarWrapper}>
            <Avatar src={user.avatar} alt={user.name} size="lg" />
            <button className={styles.cameraBtn}>
              <Camera size={16} color="#0F0E0C" />
            </button>
          </div>
          <h2 className={styles.name}>{user.name}</h2>
          <span className={styles.handle}>{user.username}</span>
          <span className={styles.email}>alex@popculture.app</span>
        </section>

        <section className={styles.statsSection}>
          <StatBox label="Reviews" value="14" />
          <StatBox label="Reactions" value="1.2K" />
          <StatBox label="Fandoms" value={selectedFandoms.length.toString()} />
        </section>

        <section className={styles.detailsSection}>
          <div className={styles.detailsBlock}>
            <button className={styles.detailRow}>
              <div className={styles.detailLabel}>
                <span className={styles.detailTitle}>Username</span>
                <span className={styles.detailValue}>{user.username}</span>
              </div>
              <ChevronRight size={20} className={styles.chevron} />
            </button>
            <button className={styles.detailRow}>
              <div className={styles.detailLabel}>
                <span className={styles.detailTitle}>Email</span>
                <span className={styles.detailValue}>alex@popculture.app</span>
              </div>
              <ChevronRight size={20} className={styles.chevron} />
            </button>
            <button className={styles.detailRow}>
              <div className={styles.detailLabel}>
                <span className={styles.detailTitle}>Contributor Rank</span>
                <span className={styles.detailValueGold}>Superfan</span>
              </div>
              <ChevronRight size={20} className={styles.chevron} />
            </button>
          </div>
        </section>

        <section className={styles.fandomsSection}>
          <h3 className={styles.sectionHeading}>My Fandoms</h3>
          <div className={styles.fandomsList}>
            {userFandoms.map(fandom => (
              <FandomChip key={fandom.id} label={fandom.name} category={fandom.category} active />
            ))}
            <button className={styles.addMoreChip}>+ Add more</button>
          </div>
        </section>

        <div className={styles.logoutSection}>
          <button className={styles.logoutBtn} onClick={handleLogout}>
            Sign Out
          </button>
        </div>
      </main>

      <BottomNav />
    </motion.div>
  );
};
