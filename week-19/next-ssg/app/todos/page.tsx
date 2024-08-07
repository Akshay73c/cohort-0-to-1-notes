import revalidate from "../lib/actions/action1";

export default async function Blog() {
  const res = await fetch("https://sum-server.100xdevs.com/todos", {
    next: { tags: ["todos"] },
  });

  const data = await res.json();
  const todos = data.todos;
  revalidate();
  console.log("data found from the be server is");
  console.log(JSON.stringify(res));

  console.log("todos", todos);
  return (
    <div>
      {todos.map((todo: any) => (
        <div key={todo.id}>
          {todo.title}
          {todo.description}
        </div>
      ))}
    </div>
  );
}
