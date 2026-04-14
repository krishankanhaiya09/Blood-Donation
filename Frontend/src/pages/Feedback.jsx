import React from 'react'

const Feedback = () => {

  const HandleFeedback=async()=>{

  }
  return (
    <div style={{ padding: "40px" }}>
      <h1>Feedback Page</h1>
      <form style={{ marginTop: "20px", display: "flex", flexDirection: "column", width: "300px", gap: "12px" }}>
        <input type="text" placeholder="Enter your name" />
        <textarea placeholder="Write your feedback" rows="5"></textarea>
        <button onClick={HandleFeedback} type="submit">Send Feedback</button>
      </form>
    </div>
  )
}

export default Feedback