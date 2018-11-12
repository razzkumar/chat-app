import { GET_CONNECTED_USER } from "../constants";

export default function(state = [], action) {
  switch (action.type) {
    case GET_CONNECTED_USER:
      return action.payload;
    default:
      return state;
  }
}
