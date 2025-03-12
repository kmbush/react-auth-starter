import { FC } from 'react'
import { useAuthenticator } from '@aws-amplify/ui-react'

const Home: FC = () => {
  const { signOut, user } = useAuthenticator()

  return (
    <div>
      <h1>Welcome, {user?.username}</h1>
      <button onClick={signOut}>Sign Out</button>
    </div>
  )
}

export default Home