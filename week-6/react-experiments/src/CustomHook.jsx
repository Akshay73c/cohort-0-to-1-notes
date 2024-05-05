import { useEffect, useState } from "react"
import axios from 'axios'

//custom useTodos() hook. 
function useTodos() {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        axios.get("xyz")
            .then((response) => {
                setTodos(response.data.todos)
            })
    }, [])

    return todos
}


export default function CustomHook() {
    const todos = useTodos();

    return (
        <>
            {todos}
        </>
    )
}