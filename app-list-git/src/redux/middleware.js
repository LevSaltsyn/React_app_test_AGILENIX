import {
  GET_GIT_HUB_USERS,
  WRITE_USERS,
  GET_USER_DATA
} from "./actions/actionTypes";
import axios from "axios";

export default store => next => action => {
  const { type } = action;
  switch (type) {
    case GET_GIT_HUB_USERS: {
      let usersData = {};
      axios
        .get("https://api.github.com/search/users?q=location:Odessa")
        .then(d => {
          next({
            type: WRITE_USERS,
            payload: { users: d.data.items }
          });
          d.data.items.map(user => {
            axios.get(user.url).then(d2 => {
              usersData[user.id] = d2.data;
              if (d.data.items.length === Object.keys(usersData).length) {
                next({
                  type: GET_USER_DATA,
                  payload: { users: usersData }
                });
              }
            });
          });
        })
        .catch(function(error) {
          alert(error, "Request Limit Exceeded");
        })
        .finally(function() {
          // always executed
        });
      return;
    }
    default:
      // do nothing
  }
};
