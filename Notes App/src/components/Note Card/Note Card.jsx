import React from 'react'
import useNote from '../../contexts/Notes context';

function NoteCard({note, onEdit }) {

    const {deleteNote} = useNote()

  return (
    <div className="backdrop-blur-lg bg-white/10 border border-white/20 p-5 rounded-2xl shadow-md mb-4 hover:scale-[1.02] transition">
      
      <h2 className="text-white font-bold text-lg mb-1">{note.title}</h2>
      <p className="text-gray-300">{note.description}</p>

      <div className="mt-4 flex gap-3">
        <button
          onClick={() => onEdit(note)}
          className="bg-blue-500/80 hover:bg-blue-500 px-3 py-1 rounded-lg text-white"
        >
          Edit
        </button>

        <button
          onClick={() => deleteNote(note.id)}
          className="bg-red-500/80 hover:bg-red-500 px-3 py-1 rounded-lg text-white"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default NoteCard