import authReducer from "../authReducer";
import { SIGN_IN, SIGN_OUT } from "../../actions/types";

it("handles actions of type SIGN_IN", () => {
  const action = {
    type: SIGN_IN,
    payload: "1"
  };

  const newState = authReducer([], action);

  expect(newState).toEqual({ isSignedIn: true, userId: "1" });
});

it("handles actions of type SIGN_OUT", () => {
  const action = {
    type: SIGN_OUT,
    payload: "1"
  };

  const newState = authReducer([], action);

  expect(newState).toEqual({ isSignedIn: false, userId: null });
});
