import { useState, useCallback, useEffect, useRef} from 'react'

function App() {
  const [password, setPassword] = useState("")
  const [length, setLength] = useState(10)
  const [numbers, setNumbers] = useState(false)
  const [specialChars, setSpecialChars] = useState(false)

  const passRef = useRef(null)
  
  const passwordGenerator = useCallback(() => {
    let pass=""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numbers) str += "0123456789"
    if (specialChars) str += "!@#$%^&*()_+[]{}|;:,.<>?/~`"

    for (let i=0; i<length; i++){
      pass+=str[Math.floor(Math.random() * str.length)]
    }

    setPassword(pass)

  }, [length, numbers, specialChars])
  
  useEffect(() => {
    passwordGenerator()
  }, [length, numbers, specialChars, passwordGenerator])

  const copyToClipboard = useCallback(() => {
    passRef.current?.select();
    passRef.current?.setSelectionRange(0, 99999); // For mobile devices
    window.navigator.clipboard.writeText(password);
  }, [password])

  return (
    <>
      <div className="text-purple-700 bg-[#FBE9E7] w-full max-w-md mx-auto px-5 py-20 my-8 h-full ">
      <h1 className="text-2xl font-bold text-center mb-4">Password Generator</h1>
        <div className="flex shadow bg-white shadow-lg rounded-3xl p-8 overflow-hidden">
          <input type="text" value ={password} ref={passRef} readOnly placeholder ="Password" className = "outline-none w-full py-1 px-3" />
          <button className="bg-[#FFAB91] hover:bg-[#BF360C] text-white font-bold py-2 px-4 rounded-full" 
          onClick={copyToClipboard}>
            Copy
          </button>
        </div>
        <div className ="flex text-sm gap-x-2">
          <div className='flex items-center gap-x-1'>
            <input type="range" min={6} max={20} className = "cursor-pointer"
            onChange= {(e) => setLength(e.target.value)}
            /> <label> Length:{length} </label> 
          </div>
          <div className='flex items-center gap-x-1'>
            <input type ="checkbox" defaultChecked={numbers}
            onChange={(e) => setNumbers(e.target.checked)}
            /> <label> Numbers</label>
            <input type = "checkbox" defaultChecked={specialChars}
            onChange = {(e) => setSpecialChars(e.target.checked)}/> <label>Special Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
