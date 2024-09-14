const db = require('../config/db');

// Define the Ticker model
const Ticker = {};

// Save top 10 tickers in the database
Ticker.saveTickers = async (tickers) => {
  await db.query('TRUNCATE TABLE tickers');
  const sql = `INSERT INTO tickers (name, last, buy, sell, volume, base_unit)
               VALUES ?`;
  const values = tickers.map(ticker => [
    ticker.name, ticker.last, ticker.buy, ticker.sell, ticker.volume, ticker.base_unit
  ]);
  await db.query(sql, [values]);
};

// Retrieve all tickers from the database
Ticker.getAllTickers = async () => {
  const [rows] = await db.query('SELECT * FROM tickers LIMIT 10');
  return rows;
};

module.exports = Ticker;
