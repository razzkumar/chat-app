import { combineReducers } from "redux";
import getProfileReducer from "./getProfileReducer";
import getUsers from "./getUsers";
export default combineReducers({
  getProfileReducer,
  getUsers
});
