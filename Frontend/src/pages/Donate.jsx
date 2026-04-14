import React from 'react'
import "./Donate.css"

const Donate = () => {
  return (
    <div className="donate-page">

      <div className="donate-container">

        <div className="donate-left">
          <span className="tag">Donate Blood</span>
          <h1>Be a <span>Life Saver</span></h1>
          <p>
            Your one donation can save multiple lives. Fill the form and become a hero today.
          </p>
        </div>

        <div className="donate-right">
          <form className="donate-form">

            <h2>Donor Form</h2>

            <input type="text" placeholder="Enter your name" required />
            <input type="number" placeholder="Enter your age" required />
            <input type="text" placeholder="Blood Group (O+, A-, etc)" required />
            <input type="text" placeholder="City" required />

            <button type="submit">Submit</button>

          </form>
        </div>

      </div>

    </div>
  )
}

export default Donate