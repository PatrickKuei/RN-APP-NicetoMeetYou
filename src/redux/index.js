import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { usersReducer } from "./users/reducer";

const store = createStore(usersReducer);

export function BooksProvider(props) {
  return <Provider store={store}>{props.children}</Provider>;
}
