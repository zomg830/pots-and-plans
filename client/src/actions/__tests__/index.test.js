import {
  signIn,
  signOut,
  changeTitle,
  changeOwnerName,
  fetchRestaurants,
  createRestaurant,
  fetchRestaurant,
  editRestaurant,
  saveRestaurantDay,
  deleteRestaurant
} from "../";

import {
  SIGN_IN,
  SIGN_OUT,
  FETCH_RESTAURANTS,
  CREATE_RESTAURANT,
  FETCH_RESTAURANT,
  DELETE_RESTAURANT,
  EDIT_RESTAURANT,
  SAVE_RESTAURANT_DAY,
  CHANGE_TITLE,
  OWNER_NAME
} from "../types";

describe("signIn", () => {
  it("has the correct type", () => {
    const action = signIn();

    expect(action.type).toEqual(SIGN_IN);
  });
});

describe("signOut", () => {
  it("has the correct type", () => {
    const action = signOut();

    expect(action.type).toEqual(SIGN_OUT);
  });
});
