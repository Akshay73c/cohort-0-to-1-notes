import "./App.css";

function App() {
  return (
    <>
      <Todo
        title="Go to gym"
        description="first task"
        done={true}
      />
    </>
  );
}

interface TodoProp {
  title: string;
  description: string;
  done: boolean;
}

function Todo(props: TodoProp) {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  );
}

export default App;
