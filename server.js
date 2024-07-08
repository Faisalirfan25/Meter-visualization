const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'meters'
});

db.connect(err => {
  if (err) {
    console.error('Database connection failed:', err);
  } else {
    console.log('Connected to the database.');
  }
});

app.get('/api/data', (req, res) => {
  const { category, serialNo } = req.query;

  if (!category || !serialNo) {
    return res.status(400).send('Category and Serial No are required.');
  }

  const query = `SELECT * FROM ${category} WHERE serial_no = ?`;

  db.query(query, [serialNo], (err, results) => {
    if (err) {
      console.error('Database query failed:', err);
      return res.status(500).send('Internal Server Error');
    }
    res.json(results);
  });
});

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
