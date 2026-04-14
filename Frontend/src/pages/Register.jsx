import React from 'react'

const Register = () => {
  
  return (
    <div style={{ padding: "40px" }}>
      <h1>Register Page</h1>
      <form style={{ marginTop: "20px", display: "flex", flexDirection: "column", width: "300px", gap: "12px" }}>
        <input type="text" placeholder="Enter your name" />
        <input type="email" placeholder="Enter your email" />
        <input type="password" placeholder="Enter your password" />
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default Register