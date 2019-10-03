import { GET_USER_DATA } from "../actions/actionTypes";


export default (state = [], actions) => {
  const { type, payload } = actions;

  switch (type) {
     case GET_USER_DATA: {
      return payload.users;
    }
    default:
      // do nothing
  }
  return state;
};
