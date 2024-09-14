// app.js
const express = require("express");
const cors = require("cors");
const tickerRoutes = require("./routes/tickerRoutes");
const tickerController = require("./controller/tickerController");
const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173"
  })
);

// Use the ticker routes
app.use("/api", tickerRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  tickerController.fetchAndSaveTickers();
});
