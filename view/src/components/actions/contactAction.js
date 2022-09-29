import {
  SET_CONTACT_LOADING,
  CLEAR_CONTACT_LOADING,
  GET_ERRORS,
} from "./types";
import axios from "axios";
import { clearNotification, setNotification } from "./notificationAction";

// @route                   POST /api/v1/contact
// @desc                    create contact
// @access                  Public
export const createContact = (data, clearState) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const res = await axios.post("/api/v1/contact", data);

    if (res) {
      dispatch(
        setNotification(
          `Thank you for contacting us. You will get reply soon`,
          "success"
        )
      );
      setTimeout(() => {
        dispatch(clearNotification());
      }, 5000);
      dispatch(clearLoading());
      clearState();
    }
  } catch (err) {
    dispatch(clearLoading());
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    });
  }
};

// set Loading

const setLoading = () => {
  return {
    type: SET_CONTACT_LOADING,
  };
};

// clear loading
const clearLoading = () => {
  return {
    type: CLEAR_CONTACT_LOADING,
  };
};
