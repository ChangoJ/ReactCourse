import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-UseReducer/todoReducer";

const initialState: any = [];

const init = () => {
  return JSON.parse(localStorage.getItem("todos") || "[]");
};

export const useTodos = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo: any) => {
    const action = {
      type: "[TODO] Add Todo",
      payload: todo,
    };

    dispatch(action);
  };

  const handleDeleteTodo = (id: any) => {
    dispatch({
      type: "[TODO] Remove Todo",
      payload: id,
    });
  };

  const handleToggleTodo = (id: any) => {
    dispatch({
      type: "[TODO] Toggle Todo",
      payload: id,
    });
  };



  return {
    todos,
    todosCount: todos.length,
    pendingTodosCount: todos.filter((todo:any) => !todo.done).length,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
  };
};
