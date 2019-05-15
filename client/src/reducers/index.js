import { combineReducers } from "redux";
import authReducer from "./authReducer";
import restaurantReducer from "./restaurantReducer";

export default combineReducers({
  auth: authReducer,
  restaurants: restaurantReducer
});
