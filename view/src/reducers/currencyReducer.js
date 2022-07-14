import {
  SET_CURRENCY,
  SET_CURRENCY_LOADING,
} from "../components/actions/types";

const initialState = {
  symbol: "£",
  code: "GBP",
  rate: 1,
  loading: false,
};

export default function currencyReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENCY_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SET_CURRENCY:
      return {
        symbol: action.payload.symbol,
        code: action.payload.code,
        rate: action.payload.rate,
        loading: false,
      };
    default:
      return state;
  }
}
