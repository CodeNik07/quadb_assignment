import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Dashboard from "./Component/Dashboard";
import Navbar from "./Component/Navbar";

function App() {
  const [tickers, setTickers] = useState([]);
  return (
    <>
      <div className="App min-h-screen bg-gray-900 text-white p-6">
        <Navbar tickers={tickers} setTickers={setTickers} />
        <Dashboard tickers={tickers} setTickers={setTickers} />
      </div>
    </>
  );
}

export default App;
