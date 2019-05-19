import { CHANGE_TITLE } from "../actions/types";

//This function takes the current state and an action and returns a new state. 
export default (state = { title: "Burger Bytes" }, action) => {
  const title = action.payload;
  switch (action.type) {
    case CHANGE_TITLE:
      if (title === "") {
        return { ...state, title: "Burger Bytes" };
      }
      return { ...state, title };
    default:
      return state;
  }
};
