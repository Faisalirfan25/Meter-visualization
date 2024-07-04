// src/components/RevenueDistributionPieChart.js
import React from 'react';
import { Pie } from 'react-chartjs-2';

const RevenueDistributionPieChart = ({ data }) => {
  const electricRevenue = data.filter(d => d.Meter_Type === 'Electric').reduce((acc, curr) => acc + curr.Revenue, 0);
  const gasRevenue = data.filter(d => d.Meter_Type === 'Gas').reduce((acc, curr) => acc + curr.Revenue, 0);
  const waterRevenue = data.filter(d => d.Meter_Type === 'Water').reduce((acc, curr) => acc + curr.Revenue, 0);

  const chartData = {
    labels: ['Electric', 'Gas', 'Water'],
    datasets: [
      {
        data: [electricRevenue, gasRevenue, waterRevenue],
        backgroundColor: ['#36A2EB', '#FFCE56', '#4BC0C0'],
        hoverBackgroundColor: ['#36A2EB', '#FFCE56', '#4BC0C0'],
      },
    ],
  };

  return (
    <div>
      <h2>Revenue Distribution</h2>
      <Pie data={chartData} />
    </div>
);
   };

   export default RevenueDistributionPieChart;
