import React, { Dispatch } from "react";
import { useDispatch, useSelector } from "react-redux";

import { IApplicationState } from "../store/modules/rootReducer";
import { TodoActions, TodoActionsTypes } from "../store/modules/todos/actions";

const Header = () => {
  const dispatch: Dispatch<TodoActions> = useDispatch();
  const { data } = useSelector((state: IApplicationState) => state.todos);

  const [inputValue, setInputValue] = React.useState<string>("");

  React.useEffect(() => {
    dispatch({
      type: TodoActionsTypes.LOAD_TODOS,
    });
  }, []);

  const addTodo = () => {
    dispatch({
      type: TodoActionsTypes.ADD_TODO,
      payload: { todo: { id: data.length + 1, description: inputValue } },
    });
  };

  const handleChangeInputValue = (text: string) => {
    setInputValue(text);
  };

  const handleAddButtonClick = () => {
    !!inputValue && addTodo();

    setInputValue("");
  };

  return (
    <div id="header">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => handleChangeInputValue(e.target.value)}
      />
      <button onClick={handleAddButtonClick}>Adicionar</button>
    </div>
  );
};

export default Header;
