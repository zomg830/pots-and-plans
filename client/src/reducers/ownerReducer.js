import { OWNER_NAME } from "../actions/types";

export default (state = { addOwnerName: "Owner" }, action) => {
  const addOwnerName = action.payload;
  switch (action.type) {
    case OWNER_NAME:
      if (addOwnerName === "") {
        return { ...state, addOwnerName: "Owner" };
      }
      return { ...state, addOwnerName };
    default:
      return state;
  }
};
