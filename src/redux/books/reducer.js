import { actionTypes } from "./actionTypes";

const initialState = {
  bookList: {
    list: ["initial state"],
    isLoading: true,
  },
};

export const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_LIST:
      const { data } = action;

      console.log("reducer call");
      return {
        bookList: {
          list: data,
          isLoading: false,
        },
      };
    default:
      console.log("reducer call default");
      return state;
  }
};
