import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

// Component to render a bar chart showing total funding by year
const FundingBarChart = () => {
  const [fundingData, setFundingData] = useState([]); // State to store raw funding data
  const [chartData, setChartData] = useState([]); // State to store formatted chart data

  useEffect(() => {
    // Fetch funding data from the JSON file
    fetch('/funding.json')
      .then((response) => response.json())
      .then((data) => {
        setFundingData(data); // Store raw data in state

        // Calculate total funding by year
        const fundingByYear = data.reduce((acc, item) => {
          acc[item.year] = (acc[item.year] || 0) + item.amount;
          return acc;
        }, {});

        // Transform the data into a format suitable for the chart
        const formattedData = Object.entries(fundingByYear).map(([year, total]) => ({
          year,
          total,
        }));
        setChartData(formattedData); // Store formatted data in state
      })
      .catch((error) => console.error('Error fetching funding data:', error)); // Handle errors
  }, []);

  return (
    // Render the bar chart using recharts
    <BarChart width={600} height={400} data={chartData}>
      <CartesianGrid strokeDasharray="3 3" /> {/* Grid lines */}
      <XAxis dataKey="year" /> {/* X-axis for years */}
      <YAxis /> {/* Y-axis for total funding */}
      <Tooltip /> {/* Tooltip for displaying data on hover */}
      <Bar dataKey="total" fill="#8884d8" /> {/* Bars representing total funding */}
    </BarChart>
  );
};

export default FundingBarChart;