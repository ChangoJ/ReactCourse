import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos }: any) => {
  return (
    <ul className="list-group">
      {todos.map((todo: any) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};
