import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card1 from './Card Component/Card1'

function App() {
  const [count, setCount] = useState(0)
  /*let obj = {
    user:"me",
    age:21
  }
  let arr=[1,2,3];
  */

  return (
    <>
      <h1 className='bg-amber-500 rounded-md text-xs p-4 text-black'>tailwind & props testing</h1>
      <br />
      <Card1 btn="click"/>
      <br />
      <Card1 username="Hey" btn="visit"/>
    </>
  )
}

export default App
