import React from "react";
import { connect } from "react-redux";
import { getDataGit } from "../actions/getGitUsers";
import UsersList from "../../components/UsersList";

const userConatainer = (props) => {
  return <UsersList {...props} />;
};

const mapStateToProps = (state) => ({
  gitUsers: state.gitHubUsers,
  gitUserData: state.gitUserData
});

const mapDispatchToProps = dispatch => ({
  getDataGit: id => dispatch(getDataGit(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(userConatainer);
