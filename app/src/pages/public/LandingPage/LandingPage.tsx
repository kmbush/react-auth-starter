import { useState, FC } from 'react'
import { useNavigate } from 'react-router-dom'

const LandingPage: FC = () => {
    const navigate = useNavigate()
  
    const handleGetStarted = () => {
      navigate('/home')
    }
  
    return (
      <div>
        <h1>Welcome to the App!</h1>
        <button onClick={handleGetStarted}>
          Get Started
        </button>
      </div>
    )
  }
  
  export default LandingPage