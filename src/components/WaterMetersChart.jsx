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
        fill: true,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        ticks: {
          color: 'white'
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
      },
      y: {
        ticks: {
          color: 'white'
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: 'white'
        }
      }
    }
  };

  return (
    <div className="chart-container">
      <h2>Water Meters Revenue Over Time</h2>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default WaterMetersChart;
