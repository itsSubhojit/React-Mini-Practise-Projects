import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos:[{
        id: 1,
        msg: "Hello world",
        completed: false
    }],

    addTodo:(msg) => {},
    updateTodo:(id,msg) =>{},
    deleteTodo:(id) =>{},
    completeTodo:(id) =>{},

})

export const TodoProvider = TodoContext.Provider

export default function useTodo() {
    return useContext(TodoContext)
}