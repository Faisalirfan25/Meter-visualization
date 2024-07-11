import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../BillingPage.css'; 

const BillingPage = () => {
  const [data, setData] = useState([]);
  const [selectedTable, setSelectedTable] = useState('electric');
  const [serialNumber, setSerialNumber] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    fetchData(selectedTable);
  }, [selectedTable]);

  const fetchData = (table) => {
    axios.get(`http://localhost:5000/api/${table}`)
      .then(response => {
        console.log(response.data); // Log the response to verify the data
        setData(response.data);
        setErrorMessage(''); // Clear error message when new data is fetched
      })
      .catch(error => {
        console.error(`There was an error fetching the ${table} data!`, error);
      });
  };

  const handleTableChange = (event) => {
    setSelectedTable(event.target.value);
    setSerialNumber(''); // Reset serial number input
    setFilteredData([]); // Clear the filtered data
    setErrorMessage(''); // Clear error message
  };

  const handleSerialNumberChange = (event) => {
    setSerialNumber(event.target.value);
    setErrorMessage(''); // Clear error message when serial number is changed
  };

  const handleSearch = () => {
    if (serialNumber) {
      const filtered = data.filter(item => item.serial_no.toString() === serialNumber);
      if (filtered.length > 0) {
        setFilteredData(filtered);
      } else {
        setFilteredData([]);
        setErrorMessage('No record found for the given serial number.');
      }
    } else {
      setFilteredData([]);
      setErrorMessage('Please enter a serial number.');
    }
  };

  const renderTable = (data, title) => (
    <div className="table-container">
      <h2>{title} Meter Data</h2>
      <table className="styled-table">
        <thead>
          <tr>
            <th>Serial No</th>
            <th>Meter Type</th>
            <th>Current Month Reading</th>
            <th>Bill</th>
            <th>PDF Bill</th>
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
                {item.pdf_bill ? (
                  <a href={item.pdf_bill} target="_blank" rel="noopener noreferrer">
                    Download/View
                  </a>
                ) : (
                  'No PDF available'
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="App">
      <div className="main-container">
        <div className="filter-container">
          <div className="dropdown-container">
            <label htmlFor="table-select">Select Meter Type:</label>
            <select id="table-select" onChange={handleTableChange} value={selectedTable}>
              <option value="electric">Electric</option>
              <option value="gas">Gas</option>
              <option value="water">Water</option>
            </select>
          </div>
          <div className="input-container">
            <label htmlFor="serial-number">Enter Serial Number:</label>
            <input
              id="serial-number"
              type="text"
              value={serialNumber}
              onChange={handleSerialNumberChange}
            />
          </div>
          <button onClick={handleSearch}>Search</button>
        </div>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        {filteredData.length > 0 && renderTable(filteredData, selectedTable.charAt(0).toUpperCase() + selectedTable.slice(1))}
      </div>
    </div>
  );
};

export default BillingPage;
