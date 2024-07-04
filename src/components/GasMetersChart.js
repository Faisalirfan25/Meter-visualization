// src/components/GasMetersChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';

const GasMetersChart = ({ data }) => {
  const gasData = data.filter(d => d.Meter_Type === 'Gas');

  const chartData = {
    labels: gasData.map(d => d.Date),
    datasets: [
      {
        label: 'Gas Meters Revenue',
        data: gasData.map(d => d.Revenue),
        fill: false,
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
        borderColor: 'rgba(255, 206, 86, 1)',
      },
    ],
  };

  return (
    <div>
      <h2>Gas Meters Revenue Over Time</h2>
      <Line data={chartData} />
    </div>
  );
};

export default GasMetersChart;
