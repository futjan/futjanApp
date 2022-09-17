import * as Types from "../components/actions/types";
const initialState = {
  adminBusinesses: [],
  businesses: [],
  privateBusinesses: [],
  business: {},
  loading: false,
  totalDocs: 0,
  keywords: [],
  result: 0,
};

export default function businessReducer(state = initialState, action) {
  switch (action.type) {
    case Types.SET_BUSINESS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case Types.CLEAR_BUSINESS_LOADING:
      return {
        ...state,
        loading: false,
      };
    case Types.CREATE_BUSINESS:
      return {
        ...state,
        businesses: [...state.businesses, action.payload],
        loading: false,
      };
    case Types.GET_BUSINESSES:
      return {
        ...state,
        businesses: action.payload.businesses,
        totalDocs: action.payload.totalDocs,
        result: action.payload.result,
        loading: false,
      };
    case Types.GET_ADMIN_BUSINESSES:
      return {
        ...state,
        adminBusinesses: action.payload.businesses,
        totalDocs: action.payload.totalDocs,
        result: action.payload.result,
        loading: false,
      };
    case Types.GET_CURRENT_USER_BUSINESSES:
      return {
        ...state,
        privateBusinesses: action.payload.businesses,
        totalDocs: action.payload.totalDocs,
        result: action.payload.result,
        loading: false,
      };
    case Types.GET_BUSINESS:
      return {
        ...state,
        business: action.payload,
        loading: false,
      };
    case Types.UPDATE_BUSINESS:
      return {
        ...state,
        businesses: state.businesses.map((busin) =>
          busin._id === action.payload._id ? action.payload : busin
        ),
        privateBusinesses: state.privateBusinesses.map((busin) =>
          busin._id === action.payload._id ? action.payload : busin
        ),
        loading: false,
      };
    case Types.ACTIVATE_BUSINESS:
      return {
        business: action.payload,

        privateBusinesses: state.privateBusinesses.map((busin) =>
          busin._id === action.payload._id ? action.payload : busin
        ),
        adminBusinesses: state.adminBusinesses.map((busin) =>
          busin._id === action.payload._id ? action.payload : busin
        ),
        loading: false,
        ...state,
      };
    case Types.DELETE_BUSINESS:
      return {
        ...state,
        businesses: state.businesses.filter(
          (busin) => busin._id !== action.payload._id
        ),
        privateBusinesses: state.privateBusinesses.filter(
          (busin) => busin._id !== action.payload._id
        ),

        adminBusinesses: state.adminBusinesses.filter(
          (busin) => busin._id !== action.payload._id
        ),

        loading: false,
      };
    default:
      return state;
  }
}
