import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("Purple")

  return (
    <>
    <div className = "w-screen h-screen"  style={{backgroundColor: color}}>
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
    <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl"> 
      <button className="flex-3 bg-[#FFCCBC] hover:bg-[#F4511E] text-white font-bold py-2 px-4 rounded-full" onClick={() => setColor("#FFCCBC")}>Tan</button>
      <button className="flex-3 bg-[#FFAB91] hover:bg-[#BF360C] text-white font-bold py-2 px-4 rounded-full" onClick={() => setColor("#FFAB91")}>Muted Orange</button>
      <button className="flex-3 bg-[#E7789D] hover:bg-[#C2185B] text-white font-bold py-2 px-4 rounded-full" onClick={() => setColor("#E7789D")}>Salmon</button>
      <button className="flex-3 bg-[#C2185B] hover:bg-[#880E4F] text-white font-bold py-2 px-4 rounded-full" onClick={() => setColor("#C2185B")}>Fuschia</button>
      <button className="flex-3 bg-[#7B1FA2] hover:bg-[#4A148C] text-white font-bold py-2 px-4 rounded-full" onClick={() => setColor("#7B1FA2")}>Deep Purple</button>
      <button className="flex-3 bg-[#BA68C8] hover:bg-[#8E24AA] text-white font-bold py-2 px-4 rounded-full" onClick={() => setColor("#BA68C8")}>Purple</button>
      <button className="flex-3 bg-[#B385BB] hover:bg-[#7E57C2] text-white font-bold py-2 px-4 rounded-full" onClick={() => setColor("#B385BB")}>Mauve</button>
      <button className="flex-3 bg-[#90A4AE] hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => setColor("#90A4AE")}>Gray</button>  
    </div>

    </div>
    </div>
    </>
  )
}

export default App
