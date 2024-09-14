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
    <div className="w-full">
      <div className="flex gap-64 align-middle">
        <h1 className="text-5xl text-[#6ccacb] font-bold">HODLINFO</h1>
        <div className="h-14 ">
          <select
            name=""
            id=""
            className="bg-gray-700 text-white mt-4 mr-10 px-4 py-2"
          >
            <option value="inr" selected>
              INR
            </option>
          </select>
          <select
            name=""
            id=""
            className="bg-gray-700 text-white mt-4 mr-10 px-4 py-2"
          >
            {tickers.map((ticker) => (
              <option value="inr" selected>
                {ticker.name.toUpperCase()}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center justify-center bg-gray-900">
          <div className="w-9 h-9 flex items-center justify-center rounded-full border-2 border-teal-400 text-teal-400 font-bold text-xl">
            {number}
          </div>
          <div>
            <button className="mx-4 bg-[#3dc6c1] py-1 px-4 rounded-md font-bold">
              Connect Telegram
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
