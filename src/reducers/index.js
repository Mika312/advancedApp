import { combineReducers } from "redux";
import AuthentificationReducer from "./reducer_authentification";

const RootReducer = combineReducers({
  authentification: AuthentificationReducer,
});

export default RootReducer;
