import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";

import App from "./components/App";
import reducers from "./reducers";

//This line of code is used to enable the Redux dev tools chrome extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//Creating the store and applying middleware to it
//Redux Thunk allows Redux to handle asynchronous API calls & functions
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(reduxThunk))
);

//We are rendering the app surrounded by a Provider component
//The Provider allows the app to take advantage of the Redux store
//Think of the store as a global state for all components to access
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
