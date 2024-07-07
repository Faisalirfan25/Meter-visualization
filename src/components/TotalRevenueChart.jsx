import React from 'react';
import { Line } from 'react-chartjs-2';

const TotalRevenueChart = ({ data }) => {
  const chartData = {
    labels: data.map((d) => d.Date),
    datasets: [
      {
        label: 'Total Revenue',
        data: data.map((d) => d.Revenue),
        fill: true,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
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
      <h2>Total Revenue Over Time</h2>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default TotalRevenueChart;
