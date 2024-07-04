// src/components/TotalRevenueChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';

const TotalRevenueChart = ({ data }) => {
  const chartData = {
    labels: data.map((d) => d.Date),
    datasets: [
      {
        label: 'Total Revenue',
        data: data.map((d) => d.Revenue),
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  return (
    <div>
      <h2>Total Revenue Over Time</h2>
      <Line data={chartData} />
    </div>
  );
};

export default TotalRevenueChart;
