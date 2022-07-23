import * as Types from "../components/actions/types";

const initialState = {
  draftAds: [],
  draftAd: {},
};

export default function draftAdReducer(state = initialState, action) {
  switch (action.type) {
    case Types.CREATE_DRAFT:
      return {
        ...state,
        draftAds: [...state.draftAds, action.payload],
      };
    case Types.GET_DRAFTS:
      return {
        ...state,
        draftAds: action.payload,
      };
    case Types.GET_DRAFT:
      return {
        ...state,
        draftAd: action.payload,
      };
    default:
      return state;
  }
}
