import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//Without using useState(), if we were to update the value of count, the value of count would not be updated in the UI. Hooks enables us to update the UI in all the places that uses count instantaneously. 
function App() {
  let [count, setCount] = useState(17)
  let [count2, setCount2] = useState(66)
  let [count3, setCount3] = useState(26)
  const addVal = () => {
    //console.log('Clicked on Increment', Math.random())
    setCount(count + 1)
  }

  const subVal = () => {
    //console.log('Clicked on Decrement', Math.random())
    if (count==0){
      alert("Counter Value cannot be negative")
    }
    else{
    setCount(count - 1)}
  }

  return (
    <>
      <div>
        <h1>Counter! </h1>
        <div className="boxes"> 
        <button onClick ={() => {setCount(count+1)}}>Increment</button>
        <h2>Counter Value: {count} </h2>
        <button onClick ={() => setCount(count-1)}>Decrement</button>
        </div>
        <div className="boxes"> 
        <button onClick ={() => setCount2(count2+10)}>Increment</button>
        <h2>Counter Value: {count2} </h2>
        <button onClick ={() => setCount2(count2-10)}>Decrement</button>
        </div>
        <div className="boxes"> 
          <button onClick ={() => setCount3(count3+1)}>Increment</button> 
          <h2>Counter Value: {count3} </h2> 
          <button onClick ={() => setCount3(count3-1)}>Decrement</button> 
        </div>
      </div>
    </>
  )
}

export default App
