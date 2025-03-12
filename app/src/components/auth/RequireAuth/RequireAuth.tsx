// src/components/auth/RequireAuth.tsx
import React, { FC, ReactNode } from 'react'
import { useAuthenticator } from '@aws-amplify/ui-react'
import { Navigate, useLocation } from 'react-router-dom'

interface RequireAuthProps {
  children: ReactNode
}

const RequireAuth: FC<RequireAuthProps> = ({ children }) => {
    const location = useLocation()
    const { authStatus } = useAuthenticator(context => [context.authStatus])
  
    console.log('Current auth status:', authStatus)
    console.log('Current location:', location)
  
    if (authStatus !== 'authenticated') {
      console.log('Not authenticated, redirecting to login')
      return <Navigate to="/login" state={{ from: location }} replace />
    }
  
    console.log('Authenticated, rendering protected content')
    return <>{children}</>
  }
  

export default RequireAuth
