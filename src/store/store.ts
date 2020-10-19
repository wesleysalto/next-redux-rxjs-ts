import { Action, applyMiddleware, createStore, Store } from "redux";
import { createEpicMiddleware, EpicMiddleware } from "redux-observable";

import rootReducer, {
  ApplicationAction,
  IApplicationState,
} from "./modules/rootReducer";
import rootEpic from "./modules/rootEpic";

const epicMiddleware: EpicMiddleware<
  ApplicationAction,
  ApplicationAction,
  IApplicationState
> = createEpicMiddleware();

const store: Store<IApplicationState> = createStore(
  rootReducer,
  applyMiddleware(epicMiddleware)
);

epicMiddleware.run(rootEpic);

export default store;
