//Importing the lodash library
import _ from "lodash";

//Importing action handler types
import {
  FETCH_RESTAURANTS,
  CREATE_RESTAURANT,
  FETCH_RESTAURANT,
  DELETE_RESTAURANT,
  EDIT_RESTAURANT
} from "../actions/types";

//Exports the reducer that handles the action with a switch case
export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_RESTAURANTS:
      return { ...state, ..._.mapKeys(action.payload, "_id") };
    case FETCH_RESTAURANT:
      return { ...state, [action.payload]: action.payload };
    case CREATE_RESTAURANT:
      return { ...state, [action.payload._id]: action.payload };
    case EDIT_RESTAURANT:
      return { ...state, [action.payload._id]: action.payload };
    case DELETE_RESTAURANT:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
