import * as Types from "../components/actions/types";
const initialState = {
  adminSurpluses: [],
  surpluses: [],
  privateSurpluses: [],
  surplus: {},
  loading: false,
  totalDocs: 0,
  keywords: [],
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
    case Types.GET_ADMIN_SURPLUSES:
      return {
        ...state,
        adminSurpluses: action.payload.surpluses,
        totalDocs: action.payload.totalDocs,
        result: action.payload.result,
        loading: false,
      };
    case Types.GET_CURRENT_USER_SURPLUSES:
      return {
        ...state,
        privateSurpluses: action.payload.surpluses,
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
        privateSurpluses: state.privateSurpluses.map((surplus) =>
          surplus._id === action.payload._id ? action.payload : surplus
        ),
        loading: false,
      };
    case Types.ACTIVATE_SURPLUS:
      return {
        surplus: action.payload,

        privateSurpluses: state.privateSurpluses.map((surplus) =>
          surplus._id === action.payload._id ? action.payload : surplus
        ),
        adminSurpluses: state.adminSurpluses.map((surplus) =>
          surplus._id === action.payload._id ? action.payload : surplus
        ),
        loading: false,
        ...state,
      };
    case Types.DELETE_SURPLUS:
      return {
        ...state,
        surpluses: state.surpluses.filter(
          (surplus) => surplus._id !== action.payload._id
        ),
        privateSurpluses: state.privateSurpluses.filter(
          (surplus) => surplus._id !== action.payload._id
        ),

        adminSurpluses: state.adminSurpluses.filter(
          (surplus) => surplus._id !== action.payload._id
        ),

        loading: false,
      };
    case Types.GET_SURPLUS_KEYWORDS:
      return {
        ...state,
        keywords: action.payload,
      };
    default:
      return state;
  }
}
