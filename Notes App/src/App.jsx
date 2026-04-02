import { useState } from 'react'
import { NoteProvider } from './contexts/Notes context'
import AddNoteForm from './components/Add Note Form/Add Note Form'
import EditNoteForm from './components/Edit Note Form/Edit Note Form'
import NoteCard from './components/Note Card/Note Card'


function App() {
  const [note, setNote] = useState([])

  const addNote = (title, description) =>{
    setNote((prev)=> [{ id:Date.now(), title:title, description:description}, ...prev])
  }

  const editNote = (id, title, description) =>{
    setNote((prev)=> prev.map((note)=> note.id === id ?{...note, title:title, description:description} : note))
  }

  const deleteNote = (id) => {
    setNote((prev)=> prev.filter((note)=> note.id !== id))
  }




  return (
    <NoteProvider value={{addNote, editNote, deleteNote}}>
       <AddNoteForm/>
       <EditNoteForm/>
       <NoteCard/>
    </NoteProvider>
  )
}

export default App
