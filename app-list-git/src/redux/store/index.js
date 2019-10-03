import { createStore, applyMiddleware } from "redux"
import reducer from "../reducers/index"
import thunks from "redux-thunk"
import api from "../middleware/api";

export default createStore(reducer, applyMiddleware(thunks, api));

