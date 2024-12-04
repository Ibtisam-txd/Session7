import React from 'react';
import {  useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  // Navigate to the About page
  const handleNavigateToAbout = () => {
    navigate('/about');
  };

  // Navigate to the Home page
  const handleNavigateToHome = () => {
    navigate('/');
  };

  return (
    <div>
      <h1>Dashboard Page</h1>
      <div>
        <button onClick={handleNavigateToAbout}>Go To About</button>
        <br /><br />
        <button onClick={handleNavigateToHome}>Back to Home</button>
      </div>
      <hr />
    </div>
  );
};

export default Dashboard;