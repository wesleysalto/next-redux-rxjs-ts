import { Reducer } from "redux";
import produce from "immer";

import { TodoActions, TodoActionsTypes } from "./actions";

export interface ITodo {
  id: number;
  description: string;
}

export interface ITodoState {
  data: ITodo[];
  loading: boolean;
  error: boolean;
}

const INITIAL_STATE: ITodoState = {
  data: [],
  loading: false,
  error: false,
};

const reducer: Reducer<ITodoState, TodoActions> = (
  state = INITIAL_STATE,
  action
) =>
  produce(state, (draft) => {
    switch (action.type) {
      case TodoActionsTypes.LOAD_TODOS:
        draft.loading = true;
        break;

      case TodoActionsTypes.LOAD_TODOS_SUCCESS:
        draft.loading = false;
        draft.data = action.payload.todos;
        break;

      case TodoActionsTypes.LOAD_TODOS_FAILED:
        draft.loading = false;
        draft.error = true;
        break;

      case TodoActionsTypes.ADD_TODO:
        draft.loading = true;
        break;

      case TodoActionsTypes.ADD_TODO_SUCCESS:
        draft.loading = false;
        draft.data.push(action.payload.todo);
        break;

      case TodoActionsTypes.ADD_TODO_FAILED:
        draft.loading = false;
        break;
    }
  });

export default reducer;
