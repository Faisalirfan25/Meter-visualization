// src/components/TotalMetersChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';

const TotalMetersChart = ({ data }) => {
  const electricData = data.filter(d => d.Meter_Type === 'Electric');
  const gasData = data.filter(d => d.Meter_Type === 'Gas');
  const waterData = data.filter(d => d.Meter_Type === 'Water');

  const chartData = {
    labels: data.map(d => d.Date),
    datasets: [
      {
        label: 'Electric Meters Revenue',
        data: electricData.map(d => d.Revenue),
        fill: false,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
      },
      {
        label: 'Gas Meters Revenue',
        data: gasData.map(d => d.Revenue),
        fill: false,
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
        borderColor: 'rgba(255, 206, 86, 1)',
      },
      {
        label: 'Water Meters Revenue',
        data: waterData.map(d => d.Revenue),
        fill: false,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
      },
    ],
  };

  return (
    <div>
      <h2>Total Meters Revenue Over Time</h2>
      <Line data={chartData} />
    </div>
  );
};

export default TotalMetersChart;
