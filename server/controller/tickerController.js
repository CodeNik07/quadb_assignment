// controllers/tickerController.js
const axios = require('axios');
const Ticker = require('../models/ticker');

// Fetch top 10 tickers and store in DB
exports.fetchAndSaveTickers = async () => {
  try {
    const response = await axios.get('https://api.wazirx.com/api/v2/tickers');
    const allTickers = Object.values(response.data);
    const top10Tickers = allTickers.slice(0, 10).map(ticker => ({
      name: ticker.base_unit,
      last: ticker.last,
      buy: ticker.buy,
      sell: ticker.sell,
      volume: ticker.volume,
      base_unit: ticker.base_unit
    }));

    // Save the top 10 tickers to the database
    await Ticker.saveTickers(top10Tickers);

    console.log("message: Tickers saved successfully!");
  } catch (error) {
    console.error('Error fetching and saving tickers:', error);
  }
};

// Get tickers from the DB and return to frontend
exports.getTickers = async (req, res) => {
  try {
    const tickers = await Ticker.getAllTickers();
    res.status(200).json(tickers);
  } catch (error) {
    console.error('Error fetching tickers:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
};
