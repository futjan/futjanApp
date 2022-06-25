import * as Type from "../components/actions/types";
const initialState = {
  ads: [],
  totalDocs: 0,
  loading: false,
};

export default function userAdsReducer(state = initialState, action) {
  switch (action.type) {
    case Type.SET_USER_ADS_LOADING:
      return {
        loading: true,
        ...state,
      };
    case Type.CLEAR_USER_ADS_LOADING:
      return {
        loading: false,
        ...state,
      };
    case Type.GET_USER_ADS:
      return {
        ...state,
        ads: action.payload,
        totalDocs: action.payload.length,
        loading: false,
      };
    default:
      return state;
  }
}
