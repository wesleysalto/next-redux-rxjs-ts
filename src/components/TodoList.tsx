import { useSelector } from "react-redux";

import { IApplicationState } from "../store/modules/rootReducer";

const TodoList = () => {
  const { data } = useSelector((state: IApplicationState) => state.todos);

  return (
    <div id="todo-list">
      {data.map((todo) => (
        <div key={todo.id}>{todo.description}</div>
      ))}
    </div>
  );
};

export default TodoList;
