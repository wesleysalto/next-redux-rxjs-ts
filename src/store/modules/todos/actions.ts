import { action, ActionType } from "typesafe-actions";
import { ITodo } from ".";

export enum TodoActionsTypes {
  LOAD_TODOS = "@todos/LOAD_TODOS",
  LOAD_TODOS_SUCCESS = "@todos/LOAD_TODOS_SUCCESS",
  LOAD_TODOS_FAILED = "@todos/LOAD_TODOS_FAILED",

  ADD_TODO = "@todos/ADD_TODO",
  ADD_TODO_SUCCESS = "@todos/ADD_TODO_SUCCESS",
  ADD_TODO_FAILED = "@todos/ADD_TODO_FAILED",
}

export const loadTodos = () => action(TodoActionsTypes.LOAD_TODOS);

export const loadTodosSuccess = (todos: ITodo[]) =>
  action(TodoActionsTypes.LOAD_TODOS_SUCCESS, { todos });

export const loadTodosFailed = () => action(TodoActionsTypes.LOAD_TODOS_FAILED);

export const addTodo = (todo: ITodo) =>
  action(TodoActionsTypes.ADD_TODO, { todo });

export const addTodoSuccess = (todo: ITodo) =>
  action(TodoActionsTypes.ADD_TODO_SUCCESS, { todo });

export const addTodoFailed = () => action(TodoActionsTypes.ADD_TODO_FAILED);

export type TodoActions = ActionType<
  | typeof loadTodos
  | typeof loadTodosSuccess
  | typeof loadTodosFailed
  | typeof addTodo
  | typeof addTodoSuccess
  | typeof addTodoFailed
>;
