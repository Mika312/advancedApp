import { ACTION_INCREMENT_COUNT } from "../actions/action-types";

const initialState = { actionCount: 0 };

export default function ActionCountReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_INCREMENT_COUNT:
      return {
        actionCount: state.actionCount + 1,
      };
    default:
      return state;
  }
}
