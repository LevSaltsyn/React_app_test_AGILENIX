import { WRITE_USERS } from "../actions/actionTypes";


export default (state = [], actions) => {
  const { type, payload } = actions;

  switch (type) {
    case WRITE_USERS: {
      return payload.users;
    }
    default:
      // do nothing
  }
  return state;
};
