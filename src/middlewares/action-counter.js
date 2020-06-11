import { ACTION_INCREMENT_COUNT } from "../actions/action-types";
import { actionIncrementCount } from "../actions/index";

export const actionCounter = (store) => (next) => (action) => {
  if (action.type !== ACTION_INCREMENT_COUNT) {
    store.dispatch(actionIncrementCount());
  }
  console.log("Action qui passe", action);

  next(action);
};
