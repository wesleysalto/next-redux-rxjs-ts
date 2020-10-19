import { combineReducers } from "redux";

import todoReducer, { ITodoState } from "./todos";
import { TodoActions } from "./todos/actions";

export interface IApplicationState {
  todos: ITodoState;
}

export type ApplicationAction = TodoActions;

export default combineReducers({
  todos: todoReducer,
});
