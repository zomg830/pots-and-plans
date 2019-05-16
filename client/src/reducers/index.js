import { combineReducers } from "redux";
import authReducer from "./authReducer";
import restaurantReducer from "./restaurantReducer";
import titleReducer from "./titleReducer";

export default combineReducers({
  auth: authReducer,
  restaurants: restaurantReducer,
  title: titleReducer
});
