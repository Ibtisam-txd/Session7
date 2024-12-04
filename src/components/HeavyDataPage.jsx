// HeavyDataPage.jsx

import React, { useState, useEffect } from 'react';

// Function to simulate a delay in data loading
const generateDummyData = (num) => {
  const data = [];
  for (let i = 1; i <= num; i++) {
    data.push(`Item #${i} - This is a piece of dummy data.`);
  }
  return data;
};

const HeavyDataPage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Simulating a delay of 2 seconds
    const timeout = setTimeout(() => {
      setData(generateDummyData(100));  // You can increase this number to simulate more data
    }, 2000);  // Simulated delay of 2 seconds

    return () => clearTimeout(timeout);
  }, []);

  if (!data) {
    return <div>Loading...</div>;  // This will show until data is available
  }

  return (
    <div style={{ color: 'black' }}>
      <h1>Heavy Data Page (Lazy Loaded)</h1>
      <p>This page contains a large amount of dummy data.</p>
      <div>
        {data.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </div>
  );
};

export default HeavyDataPage;
