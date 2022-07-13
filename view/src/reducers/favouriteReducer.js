import * as Types from "../components/actions/types";

const initialState = {
  favourites: [],
  loading: false,
};

export default function favouriteReducer(state = initialState, action) {
  switch (action.type) {
    case Types.SET_FAVOURITE_LOADING:
      return {
        ...state,
        loading: true,
      };
    case Types.CLEAR_FAVOURITE_LOADING:
      return {
        ...state,
        loading: false,
      };
    case Types.CREATE_FAVOURITE:
      return {
        ...state,
        favourites: [...state.favourites, action.payload],
        loading: false,
      };
    case Types.DELETE_FAVOURITE:
      return {
        ...state,
        favourites: state.favourites.filter(
          (fav) => fav._id !== action.payload._id
        ),
        loading: false,
      };
    case Types.GET_FAVOURITES:
      return {
        ...state,
        favourites: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
