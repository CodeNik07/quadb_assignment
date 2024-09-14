# QuadB Assignment

This project is a clone of the [HodlInfo](https://hodlinfo.com) website built using **HTML**, **CSS**, **Javascript**, **React** and **Node.js**, **Express.js** with a **MySQL** database. The project fetches the top 10 results from the WazirX API and stores key details in a database. The data is then displayed on a frontend page.

## Features
- **Frontend**: React to create a layout almost identical to hodlinfo.com.
- **Backend**: Node.js and Express are used to fetch, store, and serve data.
- **API Integration**: Fetches the top 10 tickers from [WazirX API](https://api.wazirx.com/api/v2/tickers).
- **Database**: MySQL used to store ticker data including:
  - Name
  - Last traded price
  - Buy price
  - Sell price
  - Volume
  - Base unit
- **Data Persistence**: API data is refreshed on each call, with the previous data cleared before storing new entries.

## Technologies Used
- **Frontend**: HTML, CSS, Javascript, React, TailwindCss
- **Backend**: Node.js, Express.js
- **Database**: MySQL
- **API**: WazirX API
- **Version Control**: Git

## Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/CodeNik07/quadb_assignment.git
    cd quadb_assignment
    ```

2. **Install dependencies** for both frontend and backend:
    ```bash
    cd client
    npm install
    cd ../server
    npm install
    ```
3. **Database Configuration**: Make below changes in server/config/db.js file:
    ```db.js
    host: 'localhost',
    user: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    database: 'quadb_assignment',
    ```
    Make sure you have a MySQL database created with the following structure:
    ```
    CREATE DATABASE quadb_assignment;

    USE quadb_assignment;

    CREATE TABLE tickers (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255),
        last DECIMAL(18, 8),
        buy DECIMAL(18, 8),
        sell DECIMAL(18, 8),
        volume DECIMAL(18, 8),
        base_unit VARCHAR(255)
    );
    ```
4. **Run the application**:
    ```bash
    # Start the backend server
    cd server
    npm run test

    # Start the frontend client
    cd ../client
    npm run dev
    ```
5. **Access the app**:
   Open your browser and go to `http://localhost:5173/`.
