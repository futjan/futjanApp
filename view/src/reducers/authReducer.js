import isEmpty from "../utils/is-empty";
import {
  SET_CURRENT_USER,
  SET_USER_LOADING,
  CLEAR_USER_LOADING,
} from "../components/actions/types";

const initialState = {
  isAuthenticated: false,
  user: {},
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_USER_LOADING:
      return {
        ...state,
        loading: true,
      };
    case CLEAR_USER_LOADING:
      return {
        ...state,
        loading: false,
      };
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
