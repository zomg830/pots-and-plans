//Importing the action creator types
import { SIGN_IN, SIGN_OUT } from "../actions/types";

//Setting an initial state, all caps so don't edit this
const INITIAL_STATE = {
  isSignedIn: null,
  userId: null
};

// This function takes the current state and an action and returns a new state.
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
