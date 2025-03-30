import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [amount, setAmount] = useState(0.0)
  const [conAmount, setConAmount] = useState(0.0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")

  const currencyInfo = useCurrencyInfo(from)
  const convert = () => {
    setConAmount(amount * currencyInfo[to])
  }
  const options = Object.keys(currencyInfo)
  const fromOptions = options.map((option) => (
    <option key={option} value={option}>
      {option.toUpperCase()}
    </option>
  ))
  const toOptions = options.map((option) => (
    <option key={option} value={option}>
      {option.toUpperCase()}
    </option>
  ))
  const swap = () => {
    setFrom(to)
    setTo(from)
    setConAmount(amount)
    setAmount(conAmount)
  }

  return (
    <>
      <div className="text-purple-700 bg-[#FBE9E7] w-full max-w-md mx-auto px-5 py-10 my-8 h-full flex flex-col items-center">
        <h1 className="text-2xl font-bold text-center mb-4">Currency Converter</h1>
        <div className="flex flex-col items-center gap-5 w-full">
          <div className="flex gap-3 w-full justify-center">
            <input type="number" placeholder="Amount to convert" className="border border-gray-300 rounded-lg p-2 focus:border-blue-500 focus:ring focus:ring-blue-200 text-center w-2/3" 
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))} 
            />
            <select className="border border-gray-300 rounded-lg p-1 w-1/3 focus:border-blue-500 focus:ring focus:ring-blue-200"
              value={from}
              onChange={(e) => setFrom(e.target.value)}>
              {options.map((option) => (
                <option key={option} value={option}>
                   {option.toUpperCase()}
                </option>))}
            </select>
          </div>
          
          <button className="bg-[#FFAB91] hover:bg-[#BF360C] text-white font-bold py-2 px-4 rounded-full mt-2" onClick={swap}>
            Swap ⇅
          </button>
          
          <div className="flex gap-3 w-full justify-center">
            <input type="number" placeholder="Converted Amount" className="border border-gray-300 rounded-lg p-2 focus:border-blue-500 focus:ring focus:ring-blue-200 text-center w-2/3" value={conAmount} readOnly/>
            <select className="border border-gray-300 rounded-lg p-1 w-1/3 focus:border-blue-500 focus:ring focus:ring-blue-200"
              value={to}
              onChange={(e) => setTo(e.target.value)}>
              {options.map((option) => (
                <option key={option} value={option}>
                   {option.toUpperCase()}
                </option>))}
            </select>
          </div>
        </div>
        
        <button className="bg-[#FFAB91] hover:bg-[#BF360C] text-white font-bold py-2 px-4 rounded-full mt-5" onClick={convert}>
          Convert
        </button>
        
        <div className="border border-gray-300 rounded-lg p-2 w-full bg-gray-100 text-center mt-5">
          {amount.toFixed(2)} {from.toUpperCase()} = {conAmount.toFixed(2)} {to.toUpperCase()}
        </div>
      </div>
    </>
  )
}

export default App
