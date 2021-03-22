import { combineReducers } from "redux";
import { todoReducer } from "./todos/reducer";

const reducers = combineReducers({ todoReducer });

export default reducers;
