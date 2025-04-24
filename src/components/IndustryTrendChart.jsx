import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts';

// Component to render a line chart showing funding trends by industry over time
const IndustryTrendChart = () => {
  const [fundingData, setFundingData] = useState([]); // State to store raw funding data
  const [chartData, setChartData] = useState([]); // State to store formatted chart data

  useEffect(() => {
    // Fetch funding data from the JSON file
    fetch('/funding.json')
      .then((response) => response.json())
      .then((data) => {
        setFundingData(data); // Store raw data in state

        // Group data by industry and year
        const groupedData = data.reduce((acc, item) => {
          if (!acc[item.industry]) acc[item.industry] = {}; // Initialize industry if not present
          acc[item.industry][item.year] = (acc[item.industry][item.year] || 0) + item.amount;
          return acc;
        }, {});

        // Get a sorted list of all years
        const years = [...new Set(data.map((item) => item.year))].sort();

        // Transform the grouped data into a format suitable for the chart
        const formattedData = years.map((year) => {
          const entry = { year }; // Initialize an entry for the year
          for (const industry in groupedData) {
            entry[industry] = groupedData[industry][year] || 0; // Add funding data for each industry
          }
          return entry;
        });
        setChartData(formattedData); // Store formatted data in state
      })
      .catch((error) => console.error('Error fetching funding data:', error)); // Handle errors
  }, []);

  return (
    // Render the line chart using recharts
    <LineChart width={800} height={400} data={chartData}>
      <CartesianGrid strokeDasharray="3 3" /> {/* Grid lines */}
      <XAxis dataKey="year" /> {/* X-axis for years */}
      <YAxis /> {/* Y-axis for funding amounts */}
      <Tooltip /> {/* Tooltip for displaying data on hover */}
      <Legend /> {/* Legend to identify industries */}
      {/* Render a line for each industry */}
      {Object.keys(chartData[0] || {})
        .filter((key) => key !== 'year') // Exclude the 'year' key
        .map((industry) => (
          <Line key={industry} type="monotone" dataKey={industry} stroke="#8884d8" />
        ))}
    </LineChart>
  );
};

export default IndustryTrendChart;