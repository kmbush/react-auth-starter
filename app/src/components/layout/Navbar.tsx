import { FC } from 'react';
import { NavigateFunction } from 'react-router-dom';
import styles from '../../styles/layout/Navbar.module.css';

interface MenuItem {
  label: string;
  path: string;
}

interface NavbarProps {
  title: string;
  menuItems: MenuItem[];
  onNavigate: NavigateFunction;
  showLogin: boolean;
}

// Navbar.tsx
const Navbar: FC<NavbarProps> = ({ title, menuItems, onNavigate, showLogin }) => {
    return (
      <nav className={styles.navbar}>
        <div className={styles.navbarContent}>
          <a 
            className={styles.title} 
            onClick={() => onNavigate('/')}
          >
            {title}
          </a>
          <ul className={styles.menuItems}>
            {menuItems.map((item) => (
              <li key={item.path}>
                <a onClick={() => onNavigate(item.path)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          {showLogin && (
            <button 
              className={styles.loginButton}
              onClick={() => onNavigate('/login')}
            >
              Login
            </button>
          )}
        </div>
      </nav>
    );
  };
  

export default Navbar;