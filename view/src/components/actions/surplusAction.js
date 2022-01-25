import * as Types from "./types";
import axios from "axios";

// @route                   GET /api/v1/surplus
// @desc                    get all surpluses
// @access                  Private
export const getSurpluses = () => async (dispatch) => {
  dispatch(setLoading());
  dispatch({ type: Types.CLEAR_ERRORS });
  try {
    const res = await axios.get("/api/v1/surplus");
    if (res.data) {
      dispatch({
        type: Types.GET_SURPLUSES,
        payload: res.data.surpluses,
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

// @route                   POST /api/v1/surplus
// @desc                    create new surplus
// @access                  Private
export const createSurplus = (surplus) => async (dispatch) => {
  dispatch(setLoading());
  dispatch({
    type: Types.CLEAR_ERRORS,
  });
  try {
    const res = await axios.post("/api/v1/surplus", surplus);
    if (res) {
      dispatch({
        type: Types.CREATE_SURPLUS,
        payload: res.data.surplus,
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

// @route                   GET /api/v1/surplus/:id
// @desc                    get surplus by id
// @access                  Private
export const getSurplusById = (id) => async (dispatch) => {
  dispatch(setLoading());
  dispatch({
    type: Types.CLEAR_ERRORS,
  });
  try {
    const res = await axios.get(`/api/v1/surplus/${id}`);
    if (res) {
      dispatch({
        type: Types.GET_SURPLUS,
        payload: res.data.surplus,
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

// @route                   PATCH /api/v1/surplus
// @desc                    update surplus by id
// @access                  Private
export const updateSurplus = (data) => async (dispatch) => {
  dispatch(setLoading());
  dispatch({
    type: Types.CLEAR_ERRORS,
  });
  try {
    const res = await axios.patch("/api/v1/surplus", data);
    if (res) {
      dispatch({
        type: Types.UPDATE_SURPLUS,
        payload: res.data.surplus,
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

// @route                   DELETE /api/v1/surplus/:id
// @desc                    delete surplus by id
// @access                  Private
export const deleteSurplus = (id) => async (dispatch) => {
  dispatch(setLoading());
  dispatch({
    type: Types.CLEAR_ERRORS,
  });
  try {
    const res = await axios.delete(`api/v1/surplus/${id}`);
    if (res) {
      dispatch({
        type: Types.DELETE_SURPLUS,
        payload: res.data.surplus,
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

const setLoading = () => {
  return {
    type: Types.SET_SURPLUS_LOADING,
  };
};

const clearLoading = () => {
  return {
    type: Types.CLEAR_SURPLUS_LOADING,
  };
};
