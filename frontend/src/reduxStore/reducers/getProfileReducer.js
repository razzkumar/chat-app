import { GET_PROFILE } from "../constants";

export default function(state = null, action) {
  switch (action.type) {
    case GET_PROFILE:
      return action.payload || false;
    default:
      return state;
  }
}
