import React from 'react';
import { useNavigate } from 'react-router-dom';
import './About.css';

const About = () => {
  const navigate = useNavigate();

  // Navigate to the Dashboard page
  const handleNavigateToDashboard = () => {
    navigate('/dashboard');
  };

  // Navigate to the Home page
  const handleNavigateToHome = () => {
    navigate('/');
  };

  return (
    <div>
      <h1>About Page</h1>
      <div>
        <button onClick={handleNavigateToDashboard}>Go To Dashboard</button>
        <br /><br />
        <button onClick={handleNavigateToHome}>Back to Home</button>
      </div>
    </div>
  );
};

export default About;
