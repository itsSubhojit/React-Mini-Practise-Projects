import { createContext, useContext } from "react";

export const NoteContext = createContext({
    notes: [{
        id: 1,
        title: "Daily Routine",
        description: "Wake up early"
    }],

    addNote: (id, title, description) =>{},
    editNote: (id, title, description) =>{},
    deleteNote: (id) =>{},
    searchNote: (title) =>{}
})

export const NoteProvider = NoteContext.Provider

export default function useNote() {
    return useContext(NoteContext)
}
