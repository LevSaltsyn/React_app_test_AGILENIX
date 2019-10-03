import { combineReducers } from "redux";
import gitHubUsersReducer from "./gitHubUsers";
import gitUserDataReducer from "./gіtUserData";

export default combineReducers({
  gitHubUsers: gitHubUsersReducer,
  gitUserData: gitUserDataReducer
});
