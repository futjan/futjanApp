import * as Type from "../components/actions/types";

const initialState = {
  conversations: [],
  conversation: {},
  loading: false,
};

export default function conversationReducer(state = initialState, action) {
  switch (action.type) {
    case Type.SET_CONVERSATION_LOADING:
      return {
        loading: true,
        ...state,
      };
    case Type.CLEAR_CONVERSATION_LOADING:
      return {
        loading: false,
        ...state,
      };
    case Type.GET_CONVERSATIONS:
      return {
        ...state,
        loading: false,
        conversations: action.payload,
      };
    case Type.GET_CONVERSATION:
      return {
        ...state,
        loading: false,
        conversation: action.payload,
      };
    case Type.CREATE_CONVERSATION_SINGLE:
      return {
        ...state,
        loading: false,
        conversation: action.payload,
      };
    case Type.CREATE_CONVERSATION:
      return {
        ...state,
        loading: false,
        conversations: [...state.conversations, action.payload],
      };
    default:
      return state;
  }
}
