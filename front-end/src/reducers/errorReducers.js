import { toast } from "react-toastify";

import { GET_ERRORS } from "../Actions/types";
const initialState = {};
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      toast.error(action.payload.message);
      return action.payload;
    default:
      return state;
  }
}
