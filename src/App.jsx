import React from 'react';
import FundingBarChart from './components/FundingBarChart';
import IndustryTrendChart from './components/IndustryTrendChart';

// Main App component
const App = () => {
  return (
    <div>
      {/* Page title */}
      <h1>Haley's Charts</h1>

      {/* Section for the bar chart */}
      <h2>Total Funding by Year</h2>
      <FundingBarChart />

      {/* Section for the line chart */}
      <h2>Industry Trends Over Time</h2>
      <IndustryTrendChart />
    </div>
  );
};

export default App;