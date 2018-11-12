import { GET_CHAT_ROOM } from "../constants";

export default function(state = null, action) {
  switch (action.type) {
    case GET_CHAT_ROOM:
      return action.payload || false;
    default:
      return state;
  }
}
