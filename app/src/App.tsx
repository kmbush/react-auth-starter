import { useState, FC } from 'react'
import { Navigate, Route, Routes, useLocation, Outlet} from 'react-router-dom'
import RequireAuth from './components/auth/RequireAuth/RequireAuth'
import { Authenticator } from '@aws-amplify/ui-react'

import './App.css'
import LandingPage from './pages/public/LandingPage'
import Login from './pages/public/Login'
import Home from './pages/protected/Home'

const App : FC = () => {

  return (
    <Authenticator.Provider>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<LandingPage/>} />
        <Route path="/login" element={<Login/>} />

        {/* Protected routes */}
        <Route element={<RequireAuth><Outlet /></RequireAuth>}>
          <Route path="/home" element={<Home/>} />
        </Route>
      </Routes>
    </Authenticator.Provider>
  )
}

export default App
