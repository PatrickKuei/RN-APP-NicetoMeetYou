import { actionTypes } from "./actionTypes";

const initialState = {
  userList: {
    list: [
      {
        id: 0,
        name: "",
      },
    ],
    isLoading: true,
  },
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_LIST: {
      const { data } = action;
      return {
        userList: {
          list: data,
          isLoading: false,
        },
      };
    }
    default:
      return state;
  }
};
