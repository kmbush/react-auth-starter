import { FC } from 'react';
import { Navigate, Route, Routes, Outlet } from 'react-router-dom';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import Layout from './components/layout/Layout';

import { Login, LandingPage } from './pages/public';
import { Home } from './pages/protected';

const App: FC = () => {
  return (
    <div style={{ width: '100%', minHeight: '100vh'}}>
      <Authenticator.Provider>
        <Layout>
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />

            {/* Protected routes wrapped in Authenticator */}
            <Route element={<Authenticator><Outlet /></Authenticator>
            }>
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<Home />} />
              {/* Add more protected routes here */}
            </Route>

            {/* Catch all route - redirect to home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Layout>
      </Authenticator.Provider>
    </div>
  );
};

export default App;
