// src/components/ElectricMetersChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';

const ElectricMetersChart = ({ data }) => {
  const electricData = data.filter(d => d.Meter_Type === 'Electric');

  const chartData = {
    labels: electricData.map(d => d.Date),
    datasets: [
      {
        label: 'Electric Meters Revenue',
        data: electricData.map(d => d.Revenue),
        fill: false,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
      },
    ],
  };

  return (
    <div>
      <h2>Electric Meters Revenue Over Time</h2>
      <Line data={chartData} />
    </div>
  );
};

export default ElectricMetersChart;
