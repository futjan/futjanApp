import * as Type from "../components/actions/types";

const initialState = {
  messages: [],
  loading: false,
};

export default function messageReducer(state = initialState, action) {
  switch (action.type) {
    case Type.SET_MESSAGE_LOADING:
      return {
        loading: true,
        ...state,
      };
    case Type.CLEAR_MESSAGE_LOADING:
      return {
        loading: false,
        ...state,
      };
    case Type.GET_MESSAGES:
      return {
        loading: false,
        messages: action.payload,
      };
    case Type.CREATE_MESSAGE:
      return {
        loading: false,
        messages: [...state.messages, action.payload],
      };
    default:
      return state;
  }
}
