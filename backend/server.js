const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use('/pdfs', express.static(path.join(__dirname, 'public/pdfs')));

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'meters',
});

db.connect(err => {
  if (err) {
    console.error('Database connection error:', err);
    return;
  }
  console.log('Connected to the MySQL server.');
});

app.get('/api/:table', (req, res) => {
  const table = req.params.table;
  const serial_no = req.query.serial_no;
  let query = `SELECT * FROM ${table}`;
  
  if (serial_no) {
    query += ` WHERE serial_no = ${serial_no}`;
  }
  
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching data:', err);
      res.status(500).json({ error: 'Failed to fetch data' });
      return;
    }
    res.json(results);
  });
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
