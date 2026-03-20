import { useState } from 'react';
import { cryptoOptions, currencyOptions } from './options';
import useCryptoCurrencyConverter from './hooks/cryptocurrencyconverter';

function App() {
  const [amount, setAmount] = useState("1")
  const [crypto, setCrypto] = useState("bitcoin")
  const [currency, setCurrency] = useState("inr")
  const [from, setFrom] = useState("bitcoin")
  const [to, setTo] = useState("inr")

  const price = useCryptoCurrencyConverter(crypto, currency)
  const finalPrice = amount*price

  const swap = () => {
  setCrypto(currency);
  setCurrency(crypto);
};
  

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
          value={amount}
          type="number"
          placeholder="Enter amount"
          onChange={(e) => setAmount(Number(e.target.value))}
          className="w-full p-3 rounded-lg bg-[#1c2030] outline-none mb-4"
        />

        {/* Select Row */}
        <div className="flex items-center gap-3">

          {/* From */}
          <select className="flex-1 p-3 rounded-lg bg-[#1c2030] outline-none"
           onChange={(e) => setCrypto(e.target.value)}>
            {cryptoOptions.map((crypto) =>(
              <option key={crypto.id} value={crypto.id}>{crypto.name}</option>
            ))}
          </select>

          {/* Swap */}
          <button className="px-4 py-2 bg-blue-500 rounded-lg" 
          onClick={swap}>
            ⇄ 
          </button>

          {/* To */}
          <select className="flex-1 p-3 rounded-lg bg-[#1c2030] outline-none"
          onChange={(e) => setCurrency(e.target.value)}>
            {currencyOptions.map((currency) =>(
              <option key={currency} value={currency}>{currency}</option>
            ))}
          </select>
        </div>

        {/* Result */}
        <div className="bg-[#1c2030] p-4 rounded-lg text-center mt-6 text-gray-300 text-lg">
  
  <span className="font-medium">
    {amount} {crypto.toUpperCase()}
  </span>

  <span className="mx-2">=</span>

  <span className="font-bold text-white">
    {finalPrice} {currency.toUpperCase()}
  </span>

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
