//Importing the action creator types
import { SIGN_IN, SIGN_OUT } from "../actions/types";

//Setting an initial state, all caps so don't edit this
const INITIAL_STATE = {
  isSignedIn: null,
  userId: null
};

//Exporting a reducer for to handle the authorization process, default initial state
//Also called with an action that is handled by a switch case.
export default (state = INITIAL_STATE, action) => {
  //Checks the action type ("SIGN_IN", "SIGN_OUT", etc.)
  switch (action.type) {
    case SIGN_IN:
      return { ...state, isSignedIn: true, userId: action.payload };
    case SIGN_OUT:
      return { ...state, isSignedIn: false, userId: null };
    default:
      return state;
  }
};
