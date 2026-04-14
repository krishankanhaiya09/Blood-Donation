import React from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'

import Home from './pages/Home'
import Navbar from './pages/Navbar'
import Donate from './pages/Donate'
import Feedback from './pages/Feedback'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'

import Authslider from './pages/Authslider'
import FindDonor from './pages/findDonor'
import Donatenow from './pages/Donatenow'

const AppContent = () => {
  const location = useLocation()

  const hideNavbarRoutes = ['/', '/Login', '/Register']
  const showNavbar = !hideNavbarRoutes.includes(location.pathname)

  return (
    <div>
      {showNavbar && <Navbar />}

      <Routes>
        <Route path='/' element={<Authslider />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/Donate' element={<Donate />} />
        <Route path='/Feedback' element={<Feedback />} />
        {/* <Route path='/Login' element={<Login />} />
        <Route path='/Register' element={<Register />} /> */}
        <Route path='/Profile' element={<Profile />} />
        <Route path='/FindDonor' element={<FindDonor />} />
        <Route path='/Donatenow' element={<Donatenow />} />
      </Routes>
    </div>
  )
}

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

export default App