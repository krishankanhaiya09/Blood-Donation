import React from 'react'

const Login = () => {
  return (
    <div style={{ padding: "40px" }}>
      <h1>Login Page</h1>
      <form style={{ marginTop: "20px", display: "flex", flexDirection: "column", width: "300px", gap: "12px" }}>
        <input type="email" placeholder="Enter your email" />
        <input type="password" placeholder="Enter your password" />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login