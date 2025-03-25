
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import { useTodos } from "../hooks/useTodos";


export const TodoApp = () => {
  
  const {todos,todosCount, pendingTodosCount, handleNewTodo, handleDeleteTodo, handleToggleTodo} = useTodos();

  return (
    <>
      <h1>
        TODOAPP: {todosCount}, <small>pendientes: {pendingTodosCount}</small>{" "}
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">

          <TodoList  todos={todos} onDeleteTodo={handleDeleteTodo} onToggleTodo={handleToggleTodo}/>
        </div>
      </div>

      <div className="col-5">
        <h4>Agreagr TODO</h4>
        <hr />
       <TodoAdd onNewTodo={handleNewTodo}/>
      </div>
    </>
  );
};
