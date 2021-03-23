import { combineReducers } from "redux";
import { booksReducer } from "./books/reducer";

const reducers = combineReducers({ booksReducer });

export default reducers;
