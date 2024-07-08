// server.js or a similar file in your Node.js backend
const express = require('express');
const app = express();
const mysql = require('mysql');

// Configure your MySQL connection
const connection = mysql.createConnection({
  host: 'your-database-host',
  user: 'your-database-username',
  password: 'your-database-password',
  database: 'meters'
});

connection.connect();

app.get('/api/bills', (req, res) => {
  const { category, consumerId } = req.query;
  if (!category || !consumerId) {
    return res.status(400).send('Category and consumer ID are required');
  }

  const query = `SELECT * FROM ${category} WHERE serial_no = ?`;
  connection.query(query, [consumerId], (error, results) => {
    if (error) {
      return res.status(500).send(error);
    }
    res.json(results);
  });
});

// Serve static files (PDFs)
app.use('/bills', express.static('public/bills'));

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
