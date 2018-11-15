import { GET_CHAT_MESSAGE } from "../constants";

export default function(state = null, action) {
  switch (action.type) {
    case GET_CHAT_MESSAGE:
      return action.payload || false;
    default:
      return state;
  }
}
