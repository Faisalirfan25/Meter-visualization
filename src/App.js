// src/App.js
import React, { useEffect, useState } from 'react';
import { parseCSV } from './parseCSV';
import TotalRevenueChart from './components/TotalRevenueChart';
import ElectricMetersChart from './components/ElectricMetersChart';
import GasMetersChart from './components/GasMetersChart';
import WaterMetersChart from './components/WaterMetersChart';
import TotalMetersChart from './components/TotalMetersChart';
import RevenueDistributionPieChart from './components/RevenueDistributionPieChart';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/meters.csv')
      .then(response => response.text())
      .then(csvText => {
        parseCSV(csvText, setData);
      });
  }, []);

  return (
    <div className="App">
      <h1>Meter Data Visualization</h1>
      {data.length > 0 && (
        <>
          <TotalRevenueChart data={data} />
          <ElectricMetersChart data={data} />
          <GasMetersChart data={data} />
          <WaterMetersChart data={data} />
          <TotalMetersChart data={data} />
          <RevenueDistributionPieChart data={data} />
        </>
      )}
    </div>
  );
};

export default App;
