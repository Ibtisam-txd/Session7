import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const ParamComp = () => {
  const { id } = useParams(); // Extracting 'id' from URL parameters
  const location = useLocation(); // Accessing current location (pathname)
  const navigate = useNavigate(); // For navigation

  // Navigate to the Home page
  const handleNavigateToHome = () => {
    navigate('/');
  };

  // Conditional button rendering based on pathname
  const renderHomeButton = location.pathname === "/student/abcd" || location.pathname === "/student/123";

  return (
    <div>
      <h1>Student ID: {id}</h1> {/* Display the student ID from the URL */}
      
      {/* Conditionally render the "Go to Home" button based on pathname */}
      {renderHomeButton && (
        <button onClick={handleNavigateToHome}>Go to Home</button>
      )}
    </div>
  );
};

export default ParamComp;
