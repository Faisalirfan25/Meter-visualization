const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());

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
  const query = `SELECT * FROM ${table}`;
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching data:', err);
      res.status(500).json({ error: 'Failed to fetch data' });
      return;
    }
    console.log(results); // Log the results to confirm the data
    res.json(results);
  });
});

app.listen(5001, () => {
  console.log('Server running on port 5000');
});
