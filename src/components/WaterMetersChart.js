// src/components/WaterMetersChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';

const WaterMetersChart = ({ data }) => {
  const waterData = data.filter(d => d.Meter_Type === 'Water');

  const chartData = {
    labels: waterData.map(d => d.Date),
    datasets: [
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
      <h2>Water Meters Revenue Over Time</h2>
      <Line data={chartData} />
    </div>
  );
};

export default WaterMetersChart;
