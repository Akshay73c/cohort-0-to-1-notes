import { useState } from "react";
import { useEffect } from "react";

function ExperimentApp() {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        fetch("https://sum-server.100xdevs.com/todos")
            .then(async function (res) {
                const json = await res.json();
                setTodos(json.todos);
            })
    }, [])

    return <div>
        {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description} />)}
    </div>
}

function Todo({ title, description }) {
    return <div>
        <h1>
            {title}
        </h1>
        <h4>
            {description}
        </h4>
    </div>
}

export default ExperimentApp;