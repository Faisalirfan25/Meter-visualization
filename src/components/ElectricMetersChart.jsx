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
        fill: true,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
      },'rgba(54, 162, 235, 1)'
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
      <h2>Electric Meters Revenue Over Time</h2>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default ElectricMetersChart;
