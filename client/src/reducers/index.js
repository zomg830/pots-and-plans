import { combineReducers } from "redux";
import authReducer from "./authReducer";
import restaurantReducer from "./restaurantReducer";
import titleReducer from "./titleReducer";
import ownerReducer from "./ownerReducer";

<<<<<<< HEAD
//Exports some reducers that are used to create the store in index.js
=======
// reducers listen to every single action that is sent
>>>>>>> 757bd72a5338a14473ce221bedee82bd623b246a
export default combineReducers({
  auth: authReducer,
  restaurants: restaurantReducer,
  title: titleReducer,
  addOwnerName: ownerReducer
});

/* "The store is the soul of Redux.
The store is the single source of truth for the application "
See example below:
    import { createStore } from 'redux';
    import reducer from './reducer';

    const store = createStore(reducer);

In this case, combineREducers have been imported
SEE index.js stored in client/src forlders*/

