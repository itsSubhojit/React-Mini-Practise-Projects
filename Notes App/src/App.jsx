import { useState } from 'react'
import { NoteProvider } from './contexts/Notes context'
import AddNoteForm from './components/Add Note Form/Add Note Form'
import EditNoteForm from './components/Edit Note Form/Edit Note Form'
import NoteCard from './components/Note Card/Note Card'


function App() {
  const [note, setNote] = useState([])

  const [editId, setEditId] = useState(null)
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")


  const addNote = (title, description) =>{
    setNote((prev)=> [{ id:Date.now(), title:title, description:description}, ...prev])
  }

  const editNote = (id, title, description) =>{
    setNote((prev)=> prev.map((note)=> note.id === id ?{...note, title:title, description:description} : note))
  setEditId(null)
  }

  const deleteNote = (id) => {
    setNote((prev)=> prev.filter((note)=> note.id !== id))
  }

  const handleEdit = (note) =>{
    setEditId(note.id)
    setTitle(note.title)
    setDesc(note.desc)
  }




  return (
    <NoteProvider value={{addNote, editNote, deleteNote}}>
      <div className="p-5 max-w-xl mx-auto">
         
         {editId ? 
         <EditNoteForm
         title={title}
         setTitle={setTitle}
         desc={desc}
         setDesc={setDesc}
         onSave={() => editNote(editId, title, desc)}
         onCancel={() => setEditId(null)} 
         />
         : 
         <AddNoteForm/>
         }
         {note.map ((note) => (
          <NoteCard key={note.id} note={note} onEdit={handleEdit} />
         ))}
         
      </div>
    </NoteProvider>
    

  )
}

export default App
