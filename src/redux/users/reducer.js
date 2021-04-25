import { actionTypes } from "./actionTypes";

const initialState = {
  userList: {
    list: [
      {
        id: 0,
        login: "",
        avatar_url: "",
        html_url: "",
        repos_url: "",
        type: "",
        site_admin: false,
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
