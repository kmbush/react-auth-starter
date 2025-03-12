import { FC, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthenticator } from '@aws-amplify/ui-react';
import Navbar from './Navbar';
import styles from '../../styles/layout/Layout.module.css';

interface LayoutProps {
  children: ReactNode;
}

const menuItems = [
  { label: 'Home', path: '/Home' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' }
];

const Layout: FC<LayoutProps> = ({ children }) => {
  const navigate = useNavigate();
  const { user } = useAuthenticator((context) => [context.user]);

  return (
    <div className={styles.layout}>
      <Navbar 
        title="Your App"
        menuItems={menuItems}
        onNavigate={navigate}
        showLogin={!user}
      />
      <main className={styles.main}>
        {children}
      </main>
    </div>
  );
};

export default Layout;
