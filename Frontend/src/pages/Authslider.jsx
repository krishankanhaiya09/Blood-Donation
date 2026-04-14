import React, { useState } from "react";
import "./Authslider.css";
import { Navigate, useNavigate } from "react-router-dom";
import axios from 'axios'
const AuthSlider = () => {
  const [isActive, setIsActive] = useState(false);
  const [name,setname]=useState("")
  const [email,setemail]=useState("")
  const [password,setpassword]=useState("")
const [loginEmail, setLoginEmail] = useState("")
const [loginPassword, setLoginPassword] = useState("")
  const handleLogin =async (e) => {
    e.preventDefault();
    try{
    const resl=await axios.post("http://localhost:8500/api/auth/login",{email:loginEmail,password:loginPassword})
    alert(resl.data.message)
    navigate("/Home")
  }catch(err){
alert(err.response?.data?.message||"Login failed")
  }

  };
const navigate=useNavigate()
  const handleSignup =async (e) => {
    e.preventDefault();
        try{
     const res=await axios.post("http://localhost:8500/api/auth/register",{name,email,password,})
      alert(res.data.message)
      setIsActive(false)
        }
        catch(err) {
      alert(err.response?.data?.message || "Signup failed");
    }
        
  }

  return (
    <div className="auth-page">
      <div className={`auth-container ${isActive ? "active" : ""}`}>
        <div className="form-section login-section">
          <form onSubmit={handleLogin} className="auth-form">
            <h1>Login</h1>
            <input onChange={(e)=>setLoginEmail(e.target.value)} value={loginEmail} type="email" placeholder="Email" required />
            <input onChange={(e)=>setLoginPassword(e.target.value)} value={loginPassword} type="password" placeholder="Password" required />
            <button  type="submit" className="main-btn">Login</button>
          </form>
        </div>

        <div className="form-section signup-section">
          <form onSubmit={handleSignup} className="auth-form">
            <h1>Sign Up</h1>
            <input type="text" onChange={(e)=>setname(e.target.value)} value={name} placeholder="Full Name" required />
            <input type="email" onChange={(e) => setemail(e.target.value)} value={email} placeholder="Email" required />
            <input type="password" onChange={(e)=>setpassword(e.target.value)} value={password} placeholder="Password" required />
            <button type="submit" className="main-btn">Sign Up</button>
          </form>
        </div>

        <div className="overlay-section">
          <div className={`overlay-content ${isActive ? "move" : ""}`}>
            <div className="overlay-panel left-panel">
              <h2>Welcome Back</h2>
              <p>Already have an account? Login here</p>
              <button
                type="button"
                className="ghost-btn"
                onClick={() => setIsActive(false)}
              >
                Login
              </button>
            </div>

            <div className="overlay-panel right-panel">
              <h2>Hello Friend</h2>
              <p>Create your account and join us</p>
              <button
                type="button"
                className="ghost-btn"
                onClick={() => setIsActive(true)}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthSlider;