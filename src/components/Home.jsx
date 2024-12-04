import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  // Navigate to the About page
  const handleNavigateToAbout = () => {
    navigate('/about');
  };

  return (
    <div>
      <h1>Home Page</h1>
      <div>
        <button onClick={handleNavigateToAbout}>Go to About Page</button>
      </div>
    </div>
  );
};

export default Home;
