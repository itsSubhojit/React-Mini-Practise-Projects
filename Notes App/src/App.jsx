import { useEffect, useState } from 'react'
import { NoteProvider } from './contexts/Notes context'
import AddNoteForm from './components/Add Note Form/Add Note Form'
import EditNoteForm from './components/Edit Note Form/Edit Note Form'
import NoteCard from './components/Note Card/Note Card'
import SearchBar from './components/Search/Search'


function App() {
  const [note, setNote] = useState([])

  const [editId, setEditId] = useState(null)
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [isLoaded, setIsLoaded] = useState(false)
  const [search, setSearch] = useState("")


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

  const searchNote = note.filter((n)=>
    n.title?.toLowerCase().includes(search.toLowerCase())
  )

  const handleEdit = (note) =>{
    setEditId(note.id)
    setTitle(note.title)
    setDesc(note.description)
  }

// LOAD
useEffect(() => {
  const data = JSON.parse(localStorage.getItem("note"))
  if (data && Array.isArray(data)) {
    setNote(data)
  }
  setIsLoaded(true)
}, [])

// SAVE (only after load)
useEffect(() => {
  if (isLoaded) {
    localStorage.setItem("note", JSON.stringify(note))
  }
}, [note, isLoaded])


  return (
    <NoteProvider value={{addNote, editNote, deleteNote, searchNote}}>
      <div className="p-5 max-w-xl mx-auto">
         <SearchBar search={search} setSearch={setSearch}/>

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
         
         {searchNote.length > 0 ?
         searchNote.map((note) => (
            <NoteCard key={note.id} note={note} onEdit={handleEdit} />
         ))  :
            <p className="text-red-600 text-center">No records found</p>
         }
         
      </div>
    </NoteProvider>
    

  )
}

export default App
