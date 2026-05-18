import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BottomNav } from '../../components/BottomNav/BottomNav';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { CategoryTab } from '../../components/CategoryTab/CategoryTab';
import { NewsCard } from '../../components/NewsCard/NewsCard';
import { ThemeToggle } from '../../components/ThemeToggle/ThemeToggle';
import { FandomChip } from '../../components/FandomChip/FandomChip';
import { Avatar } from '../../components/Avatar/Avatar';
import { mockNewsArticles } from '../../mock/newsArticles';
import { mockFandoms } from '../../mock/fandoms';
import { useAuth } from '../../hooks/useAuth';
import { useFandoms } from '../../hooks/useFandoms';
import { Bell } from 'lucide-react';
import styles from './NewsFeedPage.module.css';

const CATEGORIES = ['All', 'Movies', 'TV', 'Gaming', 'Music'];

export const NewsFeedPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const { user } = useAuth();
  const { selectedFandoms } = useFandoms();

  const filteredNews = activeCategory === 'All' 
    ? mockNewsArticles 
    : mockNewsArticles.filter(item => item.category === activeCategory);

  const userFandoms = mockFandoms.filter(f => selectedFandoms.includes(f.id));

  return (
    <motion.div 
      className={`app-container ${styles.page}`}
      initial={{ x: '100%', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <header className={styles.header}>
        <div className={styles.topBar}>
          <h1 className={styles.logo}>Fan<span className={styles.goldText}>fare</span></h1>
          
          <div className={styles.headerActions}>
            <div className={styles.bellContainer}>
              <Bell size={24} className={styles.bell} />
              <div className={styles.badge} />
            </div>
            <Avatar src={user?.avatar} alt={user?.name || 'User'} size="sm" />
            <ThemeToggle />
          </div>
        </div>
        
        <SearchBar placeholder="Search fandoms, news, people..." />
        
        <div className={`${styles.tabs} hide-scrollbar`}>
          {CATEGORIES.map(cat => (
            <CategoryTab 
              key={cat} 
              label={cat} 
              active={activeCategory === cat} 
              onClick={() => setActiveCategory(cat)} 
            />
          ))}
        </div>
      </header>

      <main className={`${styles.main} hide-scrollbar`}>
        <section className={styles.feedSection}>
          <h2 className={styles.sectionTitle}>Latest News</h2>
          <div className={styles.feed}>
            {filteredNews.map((article, idx) => (
              <NewsCard key={article.id} article={article} index={idx} />
            ))}
          </div>
        </section>

        {userFandoms.length > 0 && (
          <section className={styles.userFandomsSection}>
            <h2 className={styles.sectionTitle}>Your Fandoms</h2>
            <div className={`${styles.fandomScroll} hide-scrollbar`}>
              {userFandoms.map(fandom => (
                <FandomChip key={fandom.id} label={fandom.name} category={fandom.category} active />
              ))}
            </div>
          </section>
        )}
      </main>

      <BottomNav />
    </motion.div>
  );
};
