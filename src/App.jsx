import React from 'react';
import FundingBarChart from './components/FundingBarChart';
import IndustryTrendChart from './components/IndustryTrendChart';

// Main App component
const App = () => {
  return (
    <div style={{ backgroundColor: '#ffe6f2', color: '#ff66b2', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      {/* Page title */}
      <h1 style={{ fontSize: '4rem', textAlign: 'center', color: '#ff3399' }}>Haley's Charts</h1>

      {/* Section for the bar chart */}
      <h2 style={{ color: '#ff66b2' }}>Total Funding by Year</h2>
      <FundingBarChart />

      {/* Section for the line chart */}
      <h2 style={{ color: '#ff66b2' }}>Industry Trends Over Time</h2>
      <IndustryTrendChart />
    </div>
  );
};

export default App;