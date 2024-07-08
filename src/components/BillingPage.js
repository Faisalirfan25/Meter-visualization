// src/components/BillingPage.js
import React, { useState } from 'react';
import './BillingPage.css';

const BillingPage = () => {
  const [category, setCategory] = useState('');
  const [consumerId, setConsumerId] = useState('');
  const [data, setData] = useState([]);

  const handleSearch = async () => {
    // Fetch data from the server
    const response = await fetch(`/api/bills?category=${category}&consumerId=${consumerId}`);
    const result = await response.json();
    setData(result);
  };

  return (
    <div className="billing-page">
      <h2>Billing Page</h2>
      <div className="filter-section">
        <label htmlFor="category">Select Category:</label>
        <select id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Select Category</option>
          <option value="Electric">Electric</option>
          <option value="Gas">Gas</option>
          <option value="Water">Water</option>
        </select>
      </div>
      <div className="input-section">
        <label htmlFor="consumerId">Enter your consumer ID:</label>
        <input
          id="consumerId"
          type="text"
          value={consumerId}
          onChange={(e) => setConsumerId(e.target.value)}
        />
      </div>
      <button onClick={handleSearch}>Search</button>
      {data.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Serial No</th>
              <th>Meter Type</th>
              <th>Current Month Reading</th>
              <th>Bill (INR)</th>
              <th>Download Bill</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.serial_no}</td>
                <td>{item.meter_type}</td>
                <td>{item.current_month_reading}</td>
                <td>{item.bill}</td>
                <td>
                  <a href={item.bill_pdf_path} download>Download Bill</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default BillingPage;
