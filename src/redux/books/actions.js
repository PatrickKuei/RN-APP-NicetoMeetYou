import { actionTypes } from "./actionTypes";

export const booksActions = {
  updateList: (data) => {
    return {
      type: actionTypes.UPDATE_LIST,
      data,
    };
  },
};
