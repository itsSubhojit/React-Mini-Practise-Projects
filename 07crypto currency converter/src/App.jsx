import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-[#0b1220] text-white flex flex-col items-center justify-center px-4">
      
      {/* Title */}
      <h1 className="text-3xl font-bold mb-8 text-center">
        Cryptocurrency Converter Calculator
      </h1>

      {/* Card */}
      <div className="bg-[#2b2f3f] w-full max-w-3xl rounded-xl p-6 shadow-lg">

        {/* Input */}
        <input
          type="number"
          placeholder="Enter amount"
          className="w-full p-3 rounded-lg bg-[#1c2030] outline-none mb-4"
        />

        {/* Select Row */}
        <div className="flex items-center gap-3">

          {/* From */}
          <select className="flex-1 p-3 rounded-lg bg-[#1c2030] outline-none">
            <option>Bitcoin (BTC)</option>
            <option>Ethereum (ETH)</option>
          </select>

          {/* Swap */}
          <button className="px-4 py-2 bg-blue-500 rounded-lg">
            ⇄
          </button>

          {/* To */}
          <select className="flex-1 p-3 rounded-lg bg-[#1c2030] outline-none">
            <option>USD</option>
            <option>INR</option>
          </select>
        </div>

        {/* Result */}
        <div className="text-center mt-6 text-lg">
          1 Bitcoin (BTC) = <span className="font-bold">70,495.21 USD</span>
        </div>

        {/* Button */}
        <div className="flex justify-center mt-6">
          <button className="bg-black px-5 py-2 rounded-lg hover:bg-gray-800">
            Refresh
          </button>
        </div>

      </div>
    </div>
  );
}

export default App;
