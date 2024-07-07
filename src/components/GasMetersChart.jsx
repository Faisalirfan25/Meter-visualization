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
        fill: true,
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
        borderColor: 'rgba(255, 206, 86, 1)',
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
      <h2>Gas Meters Revenue Over Time</h2>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default GasMetersChart;
