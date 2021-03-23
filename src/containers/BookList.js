import { connect } from "react-redux";
import BookList from "../component/BookList/BookList";
import { booksActions } from "../redux/books/actions";

const mapStateToProps = (state) => {
  return {
    bookList: state.bookList,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateList: (data) => {
      dispatch(booksActions.updateList(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
