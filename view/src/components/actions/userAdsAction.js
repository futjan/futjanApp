import * as Types from "./types";
import axios from "axios";

// @route                               GET /api/v1/users/ads/:userId
// @desc                                get user ads
// @access                              Public
export const getUserAds =
  (id, page, limit, title, country, county, city) => async (dispatch) => {
    dispatch(setLoading());
    try {
      const res = await axios.get(
        `/api/v1/users/ads/${id}?title=${title}&country=${country}&county=${county}&city=${city}&page=${page}&limit=${limit}`
      );

      if (res) {
        dispatch({
          type: Types.GET_USER_ADS,
          payload: res.data.ads,
        });
      }
    } catch (err) {
      dispatch(clearLoading());
      if (err) {
        dispatch({
          type: Types.GET_ERRORS,
          payload: err.response.data,
        });
      }
    }
  };

// set Loading
const setLoading = () => {
  return {
    type: Types.SET_USER_ADS_LOADING,
  };
};
// clear Loading
const clearLoading = () => {
  return {
    type: Types.CLEAR_USER_ADS_LOADING,
  };
};
