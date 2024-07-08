import React, { useState } from 'react';

const BillingPage = () => {
  const [category, setCategory] = useState('');
  const [serialNo, setSerialNo] = useState('');
  const [data, setData] = useState([]);

  const handleSearch = () => {
    fetch(`/api/data?category=${category}&serialNo=${serialNo}`)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  };

  return (
    <div className="billing-page">
      <h1>Billing Page</h1>
      <div>
        <label htmlFor="category">Select Category</label>
        <select id="category" value={category} onChange={e => setCategory(e.target.value)}>
          <option value="">Select Category</option>
          <option value="Electric">Electric</option>
          <option value="Gas">Gas</option>
          <option value="Water">Water</option>
        </select>
      </div>
      <div>
        <label htmlFor="serialNo">Enter your consumer</label>
        <input
          id="serialNo"
          type="text"
          value={serialNo}
          onChange={e => setSerialNo(e.target.value)}
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
              <th>Bill (PKR)</th>
              <th>Download Bill</th>
            </tr>
          </thead>
          <tbody>
            {data.map(item => (
              <tr key={item.id}>
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
