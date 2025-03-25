import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";

const initialState:any = [
 /*  {
    id: new Date().getTime(),
    description: "Recolectar la piedra del alma",
    done: false,
  },
  {
    id: new Date().getTime() * 3,
    description: "Recolectar la piedra del tiempo",
    done: false,
  }, */
];

const init = () =>{
    return JSON.parse(localStorage.getItem("todos") || "[]");
}

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    
  }, [todos]);

  const handleNewTodo = (todo:any) =>{
    const action = {
        type: '[TODO] Add Todo',
        payload: todo
    }
    
  dispatch(action)
  }

  const handleDeleteTodo = (id:any) =>{
    dispatch({
        type: '[TODO] Remove Todo',
        payload: id
    })
  }

  const handleToggleTodo = (id:any) =>{

    dispatch({
        type: '[TODO] Toggle Todo',
        payload: id
    })
  }


  return (
    <>
      <h1>
        TODOAPP: {10}, <small>pendientes: 2</small>{" "}
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
