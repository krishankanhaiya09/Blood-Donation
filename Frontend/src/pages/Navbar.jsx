import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <span className="logo-dot"></span>
        <h2>BloodBridge</h2>
      </div>

      <ul className="nav-links">
        <li><Link to="/Home">Home</Link></li>
        <li><Link to="/Donate">Donate</Link></li>
        <li><Link to="/Feedback">Feedback</Link></li>
        <li><Link to="/Profile">Profile</Link></li>
      </ul>

      <div className="nav-right">
        <button className="nav-btn">Emergency</button>
      </div>
    </nav>
  )
}

export default Navbar