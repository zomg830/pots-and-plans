import { combineReducers } from "redux";
import authReducer from "./authReducer";
import restaurantReducer from "./restaurantReducer";

//Exports some reducers that are used to create the store in index.js
export default combineReducers({
  auth: authReducer,
  restaurants: restaurantReducer
});
