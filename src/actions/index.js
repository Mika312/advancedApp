import {
  SET_AUTHENTIFICATION,
  ACTION_INCREMENT_COUNT,
  ADD_RESSOURCE,
} from "./action-types";

/* ***** *****  action creator  ***** ***** */
export function setAuthentification(isLoggedIn) {
  return function (dispatch) {
    dispatch({
      type: SET_AUTHENTIFICATION,
      payload: isLoggedIn,
    });
  };
}

export function actionIncrementCount() {
  return {
    type: ACTION_INCREMENT_COUNT,
  };
}

export function addRessource() {
  return {
    type: ADD_RESSOURCE,
  };
}
