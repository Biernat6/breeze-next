// ./src/app/ui/index/header/header.jsx



import React, { useState } from 'react';
import { FaBars, FaShoppingCart, FaSearch, FaCircle } from 'react-icons/fa';
import styles from './header.module.css';

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          {/* Branding */}
          <div className={styles.branding}>
            <FaCircle className={styles.logo} />
            <span className={styles.logoText}>Sunix</span>
          </div>

          {/* Menu Toggle */}
          <button className={`${styles.menuToggle} ${isMenuOpen ? styles.iconActive : ''}`} onClick={() => setMenuOpen(!isMenuOpen)}>
            <FaBars />
          </button>

          {/* Navigation and Icons */}
          {/* Other component code */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
