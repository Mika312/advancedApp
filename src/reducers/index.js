import { combineReducers } from "redux";
import AuthentificationReducer from "./reducer_authentification";
import ActionCountReducer from "./reducer_action-count";

const RootReducer = combineReducers({
  authentification: AuthentificationReducer,
  actionCount: ActionCountReducer,
});

export default RootReducer;
