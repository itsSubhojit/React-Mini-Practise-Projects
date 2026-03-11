import { useState } from 'react'

function App() {
  const [color, setColor] = useState("violet")

  return (
    <div className='w-full h-screen' style={{backgroundColor:color}}>
      <div className='w-auto h-auto justify-center text-3xl font-sans bg-fuchsia-300 rounded-2xl p-2.5'>
        <h1 className='items-center'>Now The Color is: {color}</h1>
      </div>

      <div className='fixed flex flex-wrap bottom-12 justify-center p-4 inset-x-0'>
        <div className='flex flex-wrap justify-center p-2 bg-white rounded-sm gap-2'>

          <button className='outline-none rounded-full text-white p-1' style={{backgroundColor:"red"}} onClick={()=>setColor("red")}>Red</button>

          <button className='outline-none rounded-full text-white p-1' style={{backgroundColor:"green"}} onClick={()=>setColor("green")}>Green</button>

          <button className='outline-none rounded-full text-white p-1' style={{backgroundColor:"yellow"}} onClick={()=>setColor("yellow")}>Yellow</button>

          <button className='outline-none rounded-full text-white p-1' style={{backgroundColor:"violet"}} onClick={()=>setColor("violet")}>Reset</button>
        </div>
      </div>
    </div>
  )
}

export default App
