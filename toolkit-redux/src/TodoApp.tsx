import { useState } from "react";
import { useGetTodoQuery, useGetTodosQuery } from "./store/apis/todosApi";

export const TodoApp = () => {
  //const { data:todos = [], isLoading } = useGetTodosQuery("");
  const [todoId, setTodoId] = useState(1)

  const { data: todo = [], isLoading } = useGetTodoQuery(todoId);

  const nextTodo = () => {
    if (todoId < 200) {
      setTodoId(todoId + 1);
    }
  }

   const prevTodo = () => {
    if(todoId === 1) return
      setTodoId(todoId - 1);
    
  }

  return (
    <>
      <h1>Todos - RTL Query</h1>
      <hr />
      <h4> isLoading: {isLoading ? "True" : "False"}</h4>

<pre>{JSON.stringify(todo, null, 2)}</pre>

 <button disabled={isLoading} onClick={prevTodo}>
        Prev
      </button>

      <button disabled={isLoading} onClick={nextTodo}>
        Next
      </button>

      {/*  <ul>
        {todos.map((todo:any) => (
          <li key={todo.id}>
            <strong>{todo.completed ? "✅" : "❌"}</strong> {todo.id} -{" "}
            
            {todo.title}</li>
        ))}
      </ul> */}
    </>
  );
};
