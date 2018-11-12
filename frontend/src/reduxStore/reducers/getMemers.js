import { GET_CHAT_ROOM_MEMBER } from "../constants";

export default function(state = null, action) {
  switch (action.type) {
    case GET_CHAT_ROOM_MEMBER:
      return action.payload || false;
    default:
      return state;
  }
}
