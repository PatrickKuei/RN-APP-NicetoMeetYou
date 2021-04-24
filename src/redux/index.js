import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { combineReducers } from "redux";
import { usersReducer } from "./users/reducer";

export const reducers = combineReducers({ booksReducer: usersReducer });

const store = createStore(usersReducer);

export function BooksProvider(props) {
  return <Provider store={store}>{props.children}</Provider>;
}
