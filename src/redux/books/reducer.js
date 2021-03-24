import { actionTypes } from "./actionTypes";

const initialState = {
  bookList: {
    list: [
      {
        id: 0,
        name: "",
        image: null,
        count: "unknown",
        author: "unknown",
        created: "unknown",
        descript: "",
      },
    ],
    isLoading: true,
  },
};

const newBook = (state, info) => {
  return {
    ...initialState.bookList.list[0],
    ...info,
    id: state.bookList.list.length + 1,
  };
};

const editedList = (state, info) => {
  const { list } = state.bookList;
  const targetIndex = list.findIndex((book) => book.id === info.id);
  const targetBook = list[targetIndex];
  const editedBook = {
    ...targetBook,
    ...info,
  };
  const newList = [
    ...list.slice(0, targetIndex),
    editedBook,
    ...list.slice(targetIndex + 1),
  ];
  return newList;
};

export const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_LIST: {
      const { data } = action;
      return {
        bookList: {
          list: data,
          isLoading: false,
        },
      };
    }
    case actionTypes.ADD_BOOK: {
      const { info } = action;
      return {
        ...state,
        bookList: {
          ...state.bookList,
          list: [...state.bookList.list, newBook(state, info)],
        },
      };
    }
    case actionTypes.EDIT_BOOK: {
      const { info } = action;
      return {
        ...state,
        bookList: {
          ...state.bookList,
          list: editedList(state, info),
        },
      };
    }
    default:
      return state;
  }
};
