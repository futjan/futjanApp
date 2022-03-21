import isEmpty from "../utils/is-empty";
import {
  SET_CURRENT_USER,
  SET_USER_LOADING,
  CLEAR_USER_LOADING,
  GET_CURRENT_USER,
  UPDATE_CURRENT_USER,
} from "../components/actions/types";

const initialState = {
  isAuthenticated: false,
  user: {},
  currentUser: {},
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
    case GET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
        loading: false,
      };
    case UPDATE_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
