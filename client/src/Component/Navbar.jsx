import React, { useEffect, useState } from "react";

export default function Navbar({ tickers }) {
  const [number, setNumber] = useState(60);

  useEffect(() => {
    const interval = setInterval(() => {
      setNumber((prevNumber) => (prevNumber === 0 ? 60 : prevNumber - 1));
    }, 1000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full px-4 py-2 bg-gray-800">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 md:gap-8">
        <h1 className="text-3xl md:text-5xl text-[#6ccacb] font-bold text-center md:text-left">
          HODLINFO
        </h1>
        <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-center">
          <select
            name="currency"
            id="currency"
            className="bg-gray-700 text-white px-4 py-2 rounded-md"
          >
            <option value="inr">INR</option>
          </select>
          <select
            name="ticker"
            id="ticker"
            className="bg-gray-700 text-white px-4 py-2 rounded-md"
          >
            {tickers.map((ticker) => (
              <option key={ticker.name} value={ticker.name}>
                {ticker.name.toUpperCase()}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full border-2 border-teal-400 text-teal-400 font-bold text-lg md:text-xl">
            {number}
          </div>
          <button className="bg-[#3dc6c1] py-2 px-4 rounded-md font-bold text-white">
            Connect Telegram
          </button>
        </div>
      </div>
    </div>
  );
}
