import React, { useState } from 'react'
import useTodo from '../../contexts/Todo context'

function TodoForm() {
    const [submitForm, setSubmitForm] = useState("")
    const {addTodo} =useTodo()

    const submit = (e) =>{
       e.preventDefault()
       
       addTodo(submitForm)
       setSubmitForm("")
    }

    return (
        <form  className="flex" onSubmit={submit}>
            <input
                value={submitForm}
                onChange={(e) => setSubmitForm(e.target.value)}
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add 
            </button>
        </form>
    );
}

export default TodoForm;

