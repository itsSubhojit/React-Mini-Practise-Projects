import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [Count, setCounter] = useState(0);

  const resetValue = ()=>{
    setCounter(0);
  }

  const addValue = ()=>{
    if(Count>=5) return;
    setCounter(Count+1);
  }
  
  const removeValue = ()=>{
    if(Count<=0)return;
    setCounter(Count-1);
  }

  return (
    <>
      <h1>Counter</h1>
      <h2>counting no's: {Count}</h2>
      <button onClick={resetValue}>Reset</button>
      <br /><br />
      <button onClick={addValue}>Add</button>
      <br /><br />
      <button onClick={removeValue}>Remove</button>
    </>
  )
}

export default App
