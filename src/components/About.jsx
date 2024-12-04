import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate=useNavigate();
  function handleClick() {
    navigate('/dashboard');
  }
  function handleClickforHome(){
    navigate('/');
  }
  return (
    <div>
      About Page
      <br /><br />
      <button onClick={handleClick}>
        Go To Dashboard
      </button>
      <br /><br />
      <button onClick={handleClickforHome}>Back to Home</button>

    </div>
  )
}
export default About