import React from 'react';
import FundingBarChart from './components/FundingBarChart';
import IndustryTrendChart from './components/IndustryTrendChart';

// Main App component
const App = () => {
  return (
    <div style={{ backgroundColor: '#ffe6f2', color: '#ff66b2', padding: '20px', fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
      {/* Page title */}
      <h1 style={{ fontSize: '5rem', color: '#ff3399', marginBottom: '40px' }}>Haley's Charts</h1>

      {/* Section for the bar chart */}
      <h2 style={{ color: '#ff66b2', marginBottom: '20px' }}>Total Funding by Year</h2>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px' }}>
        <FundingBarChart />
      </div>

      {/* Section for the line chart */}
      <h2 style={{ color: '#ff66b2', marginBottom: '20px' }}>Industry Trends Over Time</h2>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <IndustryTrendChart />
      </div>
    </div>
  );
};

export default App;