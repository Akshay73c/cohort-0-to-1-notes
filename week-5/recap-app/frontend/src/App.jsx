import { useState } from 'react'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {
  const [todos, setTodos] = useState([])

  // This is Wrong way to do it. 
  fetch("http://localhost:3000/todos")
    .then(async (res) => {
      const json = await res.json();
      setTodos(json.todos)  //This will create infinte loop
      // Hint: use UseEffect hook.
    })

  return (
    <div>
      <CreateTodo />
      <Todos todos={todos} />

    </div>
  )
}

export default App
