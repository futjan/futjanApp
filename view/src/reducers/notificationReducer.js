import {
  SET_NOTIFICATION,
  CLEAR_NOTIFICATION,
} from "../components/actions/types";

const initialState = {
  message: "",
  type: "",
  loading: false,
};

export default function notificationReducer(state = initialState, action) {
  switch (action.type) {
    case SET_NOTIFICATION:
      return {
        message: action.payload.msg,
        type: action.payload.type,
        loading: true,
      };
    case CLEAR_NOTIFICATION:
      return {
        loading: false,
        message: "",
        type: "",
      };
    default:
      return state;
  }
}
