// config/db.js
const mysql = require('mysql2');

// Create a MySQL connection pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'YOUR_USERNAME',
  password: 'YOUR_PASSWORD',
  database: 'quadb_assignment',
});

module.exports = pool.promise(); // Use promises for async/await
