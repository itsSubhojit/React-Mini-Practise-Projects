import { useState } from 'react'
import AddToDo from './components/Add ToDo/Add ToDo'
import ToDoItem from './components/ToDo Item/ToDo Item'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AddToDo/>
      <ToDoItem/>
    </>
  )
}

export default App
