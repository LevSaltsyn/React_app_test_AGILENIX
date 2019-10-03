import { createStore, applyMiddleware } from "redux"
import reducer from "./reducers/index"
import thunks from "redux-thunk"
import api from "./middleware.js";

export default createStore(reducer, applyMiddleware(thunks, api));

