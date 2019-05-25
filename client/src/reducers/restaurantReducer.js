//Importing the lodash library
import _ from "lodash";

//Importing action handler types
import {
  FETCH_RESTAURANTS,
  CREATE_RESTAURANT,
  FETCH_RESTAURANT,
  DELETE_RESTAURANT,
  EDIT_RESTAURANT,
  SAVE_RESTAURANT_DAY
} from "../actions/types";

//This function takes the current state and an action and returns a new state.
export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_RESTAURANTS:
      return { ...state, ..._.mapKeys(action.payload, "_id") };
    case FETCH_RESTAURANT:
      return { ...state, [action.payload._id]: action.payload };
    case CREATE_RESTAURANT:
      return { ...state, [action.payload._id]: action.payload };
    case EDIT_RESTAURANT:
      return { ...state, [action.payload._id]: action.payload };
    case SAVE_RESTAURANT_DAY:
      console.log("save day payload", action.payload);
      return { ...state, [action.payload._id]: action.payload };
    case DELETE_RESTAURANT:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
