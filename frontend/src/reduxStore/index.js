import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import mainReducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";

function configureStore() {
  return createStore(mainReducer, composeWithDevTools(applyMiddleware(thunk)));
}

export default configureStore;
