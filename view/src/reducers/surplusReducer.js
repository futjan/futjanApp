import * as Types from "../components/actions/types";
const initialState = {
  surpluses: [],
  surplus: {},
  loading: false,
  totalDocs: 0,
  result: 0,
};

export default function SurplusReducer(state = initialState, action) {
  switch (action.type) {
    case Types.SET_SURPLUS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case Types.CLEAR_SURPLUS_LOADING:
      return {
        ...state,
        loading: false,
      };
    case Types.CREATE_SURPLUS:
      return {
        ...state,
        surpluses: [...state.surpluses, action.payload],
        loading: false,
      };
    case Types.GET_SURPLUSES:
      return {
        ...state,
        surpluses: action.payload.surpluses,
        totalDocs: action.payload.totalDocs,
        result: action.payload.result,
        loading: false,
      };
    case Types.GET_SURPLUS:
      return {
        ...state,
        surplus: action.payload,
        loading: false,
      };
    case Types.UPDATE_SURPLUS:
      return {
        ...state,
        surpluses: state.surpluses.map((surplus) =>
          surplus._id === action.payload._id ? action.payload : surplus
        ),
        loading: false,
      };
    case Types.DELETE_SURPLUS:
      return {
        ...state,
        surpluses: state.surpluses.filter(
          (surplus) => surplus._id !== action.payload._id
        ),
        loading: false,
      };
    default:
      return state;
  }
}
