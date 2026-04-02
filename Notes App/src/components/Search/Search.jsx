import React from 'react'

function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="🔍 Search notes..."
      className="w-full p-3 mb-5 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 text-white outline-none placeholder-gray-300"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}