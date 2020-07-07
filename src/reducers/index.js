import { combineReducers } from "redux";
import AuthentificationReducer from "./reducer_authentification";
import ActionCountReducer from "./reducer_action-count";
import RessourceReducer from "./reducer_ressource";

const RootReducer = combineReducers({
  authentification: AuthentificationReducer,
  actionCount: ActionCountReducer,
  ressource: RessourceReducer,
});

export default RootReducer;
