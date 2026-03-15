import { useState,useEffect,useRef } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [lowercaseAllowed, setLowercaseAllowed] = useState(false)
  const [symbolAllowed, setSymbolAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const [copyText, setCopyText] = useState("Copy")

  const passwordGenerator = ()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let lowercase = "abcdefghijklmnopqrstuvwxyz";
    let num = "0123456789"
    let symbols = "@#$%&*[]=!"

    if (lowercaseAllowed){
      str += lowercase
    }
    if (numberAllowed){
      str += num
    }
    if (symbolAllowed){
      str += symbols
    }

    for(let i=0; i<length; i++){
      let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char);
    }
  setPassword(pass)
  setCopyText("Copy")
  }

  const passwordRef = useRef(null)

  const copyPasswordToClipboard = ()=> {
    passwordRef.current?.select()
    //passwordRef.current?.setSelectionRange(0, 20) /* selecting password range from 0 index to 20 */
    window.navigator.clipboard.writeText(password)

    setCopyText("Copied!")
  }
/*  // optional: auto-generate when settings change
useEffect(()=>{
  passwordGenerator()
},[length,numberAllowed,symbolAllowed])*/

  return (
    <>
      <div className="w-full max-w-lg mx-auto h-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center text-2xl my-3'>Password Generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 bg-white"
            placeholder="Password"
            readOnly
            ref={passwordRef}
        />
        <button
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 cursor-pointer'
        >{copyText}</button>
        
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={20}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setLength(Number(e.target.value))}}
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1 cursor-pointer">
      <input
          type="checkbox"
          defaultChecked={lowercaseAllowed}
          id="LowercaseInput"
          onChange={() => {
              setLowercaseAllowed((prev) => !prev);
          }}
      />
      <label htmlFor="LowercaseInput">LowerCase</label>
      </div>
      <div className="flex items-center gap-x-1 cursor-pointer">
      <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => {
              setNumberAllowed((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1 cursor-pointer">
          <input
              type="checkbox"
              defaultChecked={symbolAllowed}
              id="characterInput"
              onChange={() => {
                  setSymbolAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div><br />

<button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-200 cursor-pointer"
onClick={passwordGenerator}>
  Generate Password
</button>

</div>
    </>
  )
}

export default App
