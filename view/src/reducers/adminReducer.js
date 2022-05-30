import {
  PRODUCT_SET_LOADING,
  PRODUCT_CLEAR_LOADING,
  GET_PRODUCTS,
  GET_PRODUCT,
} from "../components/actions/types";

const initialState = {
  products: [],
  product: {},
  users: [],
  user: {},
  loading: false,
};

export default function AdminReducer(state = initialState, action) {
  switch (action.type) {
    case PRODUCT_SET_LOADING:
      return {
        loading: true,
      };
    case PRODUCT_CLEAR_LOADING:
      return {
        loading: false,
      };
    case GET_PRODUCTS:
      return {
        products: action.payload,
        loading: false,
        ...state,
      };
    default:
      return state;
  }
}
