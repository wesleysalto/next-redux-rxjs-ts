import axios from "axios";
import { from, of } from "rxjs";
import { catchError, filter, map, mergeMap, switchMap } from "rxjs/operators";
import { combineEpics, Epic, ofType } from "redux-observable";

import {
  addTodoSuccess,
  loadTodosFailed,
  loadTodosSuccess,
  TodoActionsTypes,
} from "./actions";
import { isOfType } from "typesafe-actions";
import { ApplicationAction, IApplicationState } from "../rootReducer";

export const loadTodos: Epic<
  ApplicationAction,
  ApplicationAction,
  IApplicationState
> = (action$) =>
  action$.pipe(
    ofType(TodoActionsTypes.LOAD_TODOS),
    switchMap(() =>
      from(axios.get("http://localhost:3333/todos")).pipe(
        map((resp) => loadTodosSuccess(resp.data)),
        catchError(() => of(loadTodosFailed()))
      )
    )
  );

export const addTodo: Epic<
  ApplicationAction,
  ApplicationAction,
  IApplicationState
> = (action$, state$) =>
  action$.pipe(
    filter(isOfType(TodoActionsTypes.ADD_TODO)),
    switchMap((action) =>
      from(axios.post("http://localhost:3333/todos", action.payload.todo)).pipe(
        map((resp) => addTodoSuccess(resp.data)),
        catchError(() => of(loadTodosFailed()))
      )
    )
  );

export default combineEpics(loadTodos, addTodo);
