import { combineEpics } from "redux-observable";

import todoEpic from "./todos/epics";

export default combineEpics(todoEpic);
