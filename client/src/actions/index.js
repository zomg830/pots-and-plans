import {
  SIGN_IN,
  SIGN_OUT,
  FETCH_RESTAURANTS,
  CREATE_RESTAURANT,
  FETCH_RESTAURANT,
  DELETE_RESTAURANT,

  // EDIT_RESTAURANT,
  CHANGE_TITLE,
  OWNER_NAME

} from "./types";
import API from "../utils/API";
import history from "../history";

//an action is an object with a type & a payload
export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

export const changeTitle = str => {
  return {
    type: CHANGE_TITLE,
    payload: str
  };
};

export const changeOwnerName = str => {
  return {
    type: OWNER_NAME,
    payload: str
  };
};

// dispatching an action is the only way to update the application state
// async functions always return a promise
export const fetchRestaurants = () => async dispatch => {
  // keyword await makes JavaScript wait until that promise settles and returns its result
  const response = await API.getRestaurants();

  dispatch({ type: FETCH_RESTAURANTS, payload: response.data });
};

// getState method returns the current state
export const createRestaurant = formValues => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await API.saveRestaurant({ ...formValues, userId });

  dispatch({ type: CREATE_RESTAURANT, payload: response.data });
  history.push("/");
};

export const fetchRestaurant = id => async dispatch => {
  const response = await API.getRestaurant(id);

  dispatch({ type: FETCH_RESTAURANT, payload: response.data });
};

export const editRestaurant = (id, formValues) => async dispatch => {
  const response = await API.editRestaurant(id, { ...formValues });

  dispatch({ type: EDIT_RESTAURANT, payload: response.data });
  history.push("/");
};

export const deleteRestaurant = id => async dispatch => {
  await API.deleteRestaurant(id);

  dispatch({ type: DELETE_RESTAURANT, payload: id });
  history.push("/");
};
