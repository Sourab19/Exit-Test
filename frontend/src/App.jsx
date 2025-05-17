import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import EmailPage from './components/EmailPage'
import { Route, Routes } from 'react-router-dom'
import OtpPage from './components/OtpPage'
import WelcomePage from './components/WelcomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/' element ={<EmailPage />} />
      <Route path='/otp' element ={<OtpPage />} />
      <Route path='/welcome' element ={<WelcomePage />} />
      </Routes>
    </>
  )
}

export default App
