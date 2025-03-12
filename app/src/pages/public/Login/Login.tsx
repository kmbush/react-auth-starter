import { Authenticator, View, useAuthenticator } from '@aws-amplify/ui-react';
import { Navigate, useLocation } from 'react-router-dom';
import { useState, FC } from 'react';
import '@aws-amplify/ui-react/styles.css';

const Login: FC = () => {
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    return (
        <View>
            <Authenticator hideSignUp={true}>
                {({ signOut, user }) => (
                    <div>
                        <p>Welcome, {user?.username}</p>
                        <button onClick={signOut}>Sign Out</button>
                        <Navigate to="/home" replace />
                  </div>
                )}
            </Authenticator>
        </View>
    
    )
}
 export default Login