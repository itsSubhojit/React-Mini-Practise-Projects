import React from 'react'

function EditNoteForm({ title, setTitle, desc, setDesc, onSave, onCancel }) {
  return (
    <div className="backdrop-blur-lg bg-white/10 border border-white/20 p-5 rounded-2xl shadow-lg mb-5">
      
      <input
        type="text"
        className="w-full mb-3 p-3 rounded-lg bg-white/10 text-white outline-none"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        className="w-full mb-3 p-3 rounded-lg bg-white/10 text-white outline-none"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />

      <div className="flex gap-3">
        <button
          onClick={onSave}
          className="flex-1 bg-green-500/80 hover:bg-green-500 py-2 rounded-lg text-white"
        >
          Save
        </button>

        <button
          onClick={onCancel}
          className="flex-1 bg-gray-500/80 hover:bg-gray-500 py-2 rounded-lg text-white"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default EditNoteForm