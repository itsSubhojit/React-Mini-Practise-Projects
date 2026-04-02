import React, { useState } from 'react'
import useNote from '../../contexts/Notes context'

function AddNoteForm() {

    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const {addNote} = useNote()

    const handleSubmit =(e) =>{ 
        e.preventDefault()

        if(!title || !desc) return
        addNote(title,desc)
        setTitle("")
        setDesc("")
    }

  return (
    <form onSubmit={handleSubmit} className="backdrop-blur-lg bg-white/10 border border-white/20 p-5 rounded-2xl shadow-lg mb-5">
      <input
        type="text"
        placeholder="Title..."
        className="w-full mb-3 p-3 rounded-lg bg-white/10 text-white placeholder-gray-300 outline-none"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Write your note..."
        className="w-full mb-3 p-3 rounded-lg bg-white/10 text-white placeholder-gray-300 outline-none"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />

      <button
        className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 py-2 rounded-lg text-white font-semibold hover:scale-105 transition"
      >
        Add Note
      </button>
    </form>
  );
}

export default AddNoteForm