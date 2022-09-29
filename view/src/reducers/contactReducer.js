import {
  SET_CONTACT_LOADING,
  CLEAR_CONTACT_LOADING,
} from "../components/actions/types";

const initialState = {
  contacts: [],
  loading: false,
};

export default function contactReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CONTACT_LOADING:
      return {
        ...state,
        loading: true,
      };
    case CLEAR_CONTACT_LOADING:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
