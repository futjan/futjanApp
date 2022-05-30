import isEmpty from "../utils/is-empty";
import {
  SET_CURRENT_USER,
  SET_USER_LOADING,
  CLEAR_USER_LOADING,
  GET_CURRENT_USER,
  UPDATE_CURRENT_USER,
  GET_USER_PRESET,
  GET_USERS,
  BLOCKED_USER,
  DELETED_USER,
  GET_USER,
} from "../components/actions/types";

const initialState = {
  isAuthenticated: false,
  users: [],
  user: {},
  currentUser: {},
  preset: {},
  totalDocs: 0,
  result: 0,
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
    case GET_USERS:
      return {
        ...state,
        users: action.payload.users,
        totalDocs: action.payload.totalDocs,
        result: action.payload.result,
        loading: false,
      };
    case BLOCKED_USER:
      return {
        ...state,
        users: state.users.filter((user) => user._id !== action.payload._id),
        user: action.payload,
        loading: false,
      };
    case DELETED_USER:
      return {
        ...state,
        users: state.users.filter((user) => user._id !== action.payload._id),
        user: {},
        loading: false,
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case UPDATE_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
        loading: false,
      };
    case GET_USER_PRESET:
      return {
        ...state,
        preset: action.payload,
      };
    default:
      return state;
  }
}
