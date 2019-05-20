import {
  SIGN_IN,
  SIGN_OUT,
  FETCH_RESTAURANTS,
  CREATE_RESTAURANT,
  FETCH_RESTAURANT,
  DELETE_RESTAURANT,
  // EDIT_RESTAURANT,
  CHANGE_TITLE
} from "./types";
import API from "../utils/API";
import history from "../history";

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

export const fetchRestaurants = () => async dispatch => {
  const response = await API.getRestaurants();

  dispatch({ type: FETCH_RESTAURANTS, payload: response.data });
};

export const createRestaurant = formValues => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await API.saveRestaurant({ ...formValues, userId });

  dispatch({ type: CREATE_RESTAURANT, payload: response.data });
  history.push("/");
};

export const fetchRestaurant = id => async dispatch => {
  console.log("fetchRestaurant", id);
  const response = await API.getRestaurant(id);

  dispatch({ type: FETCH_RESTAURANT, payload: response.data });
};

// export const editRestaurant = (id, formValues) => async dispatch => {
//   const response = await API.patch(`/restaurants/${id}`, formValues);

//   dispatch({ type: EDIT_RESTAURANT, payload: response.data });
//   history.push("/");
// };

export const deleteRestaurant = id => async dispatch => {
  await API.deleteRestaurant(id);

  dispatch({ type: DELETE_RESTAURANT, payload: id });
  history.push("/");
};
