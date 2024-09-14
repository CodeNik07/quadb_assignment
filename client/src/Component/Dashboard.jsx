import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard({ tickers, setTickers }) {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/get-tickers"
        ); // Point to your backend
        setTickers(response.data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-gray-500">
          Best Price to Trade
        </h1>
        <div className="flex w-full justify-center gap-28 align-middle p-4 mt-6">
          <div>
            <p className="text-4xl mb-2 text-[#6ccacb]">0.1%</p>
            <span className="text-gray-400">5 Mins</span>
          </div>
          <div>
            <p className="text-4xl mb-2 text-[#6ccacb]">0.96%</p>
            <span className="text-gray-400">1 Hour</span>
          </div>
          <div>
            <h2 className="text-6xl font-semibold">₹ 26,56,110</h2>
          </div>
          <div>
            <p className="text-4xl mb-2 text-[#6ccacb]">2.73%</p>
            <span className="text-gray-400">1 Day</span>
          </div>
          <div>
            <p className="text-4xl mb-2 text-[#6ccacb]">7.51%</p>
            <span className="text-gray-400">7 Days</span>
          </div>
        </div>

        <p className="text-gray-400 text-sm">
          Average BTC/INR net price including commission
        </p>
        <div className="flex justify-center space-x-6 mt-4"></div>
      </div>

      <table className="table-auto w-full text-center rounded-lg overflow-hidden shadow-lg">
        <thead className="text-gray-500">
          <tr>
            <th className="px-4 py-3">#</th>
            <th className="px-4 py-3">Platform</th>
            <th className="px-4 py-3">Last Traded Price</th>
            <th className="px-4 py-3">Buy / Sell Price</th>
            <th className="px-4 py-3">Volume</th>
            <th className="px-4 py-3">Base Unit</th>
          </tr>
        </thead>
        <tbody className="divide-y-8 divide-gray-900">
          {tickers.map((ticker, index) => (
            <tr key={index} className="bg-gray-800 mb-2 hover:bg-gray-700 rounded-lg overflow-hidden font-bold">
              <td className="px-4 py-3">{index + 1}</td>
              <td>{ticker.name.toUpperCase()}</td>
              <td>₹ {Number(ticker.last).toFixed(6)}</td>
              <td>
                ₹ {Number(ticker.buy).toFixed(4)} / ₹ {Number(ticker.sell).toFixed(4)}
              </td>
              <td
                className={
                  ticker.difference < 0 ? "text-red-500" : "text-green-500"
                }
              >
                {ticker.volume}%
              </td>
              <td>{ticker.base_unit}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
