import { combineReducers } from "redux";
import getProfileReducer from "./getProfileReducer";
import getUsers from "./getUsers";
import getChatrooms from "./getChatrooms";
import getMembers from "./getMemers";
import getMessage from "./getMessage";

export default combineReducers({
  getProfileReducer,
  getUsers,
  getChatrooms,
  getMembers,
  getMessage
});
