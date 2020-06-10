import { SET_AUTHENTIFICATION } from "./action-types";

/* ***** *****  action creator  ***** ***** */
export function setAuthentification(isLoggedIn) {
  return {
    type: SET_AUTHENTIFICATION,
    payload: isLoggedIn,
  };
}
