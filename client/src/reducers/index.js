import { combineReducers } from "redux";
import authReducer from "./authReducer";
import restaurantReducer from "./restaurantReducer";
import titleReducer from "./titleReducer";

export default combineReducers({
  auth: authReducer,
  restaurants: restaurantReducer,
  title: titleReducer
});

/* "The store is the soul of Redux.
The store is the single source of truth for the application "
See example below:
    import { createStore } from 'redux';
    import reducer from './reducer';

    const store = createStore(reducer);

In this case, combineREducers have been imported
SEE index.js stored in client/src forlders*/

