// routes/tickerRoutes.js
const express = require('express');
const router = express.Router();
const tickerController = require('../controller/tickerController');

// Route to get tickers from the database
router.get('/get-tickers', tickerController.getTickers);

module.exports = router;
