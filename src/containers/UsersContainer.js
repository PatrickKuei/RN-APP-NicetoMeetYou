import { connect } from "react-redux";
import UserList from "../component/UserList/UserList";
import { usersActions } from "../redux/users/actions";

const mapStateToProps = (state) => {
  return {
    userList: state.userList,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateList: (data) => dispatch(usersActions.updateList(data)),
  };
};

export default {
  UserList: connect(mapStateToProps, mapDispatchToProps)(UserList),
};
