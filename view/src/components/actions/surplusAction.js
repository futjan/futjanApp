import * as Types from "./types";
import axios from "axios";

// @route                   GET /api/v1/surplus
// @desc                    get all surpluses
// @access                  Private
export const getSurpluses =
  (page, limit, sort, businessType, category, name, city) =>
  async (dispatch) => {
    dispatch(setLoading());
    dispatch({ type: Types.CLEAR_ERRORS });
    try {
      const res = await axios.get(
        `/api/v1/surplus?businessType=${businessType}&category=${category}&name=${name}&city=${city}&page=${page}&limit=${limit}&sort=${sort}`
      );
      if (res.data) {
        dispatch({
          type: Types.GET_SURPLUSES,
          payload: res.data,
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
export const createSurplus = (surplus, clearState) => async (dispatch) => {
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
      clearState();
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

// @route                   GET /api/v1/surplus/name
// @desc                    get surplus names
// @access                  public
export const getSurplusNames = () => async (dispatch) => {
  dispatch({
    type: Types.CLEAR_ERRORS,
  });
  try {
    const res = await axios.get("/api/v1/surplus/name");

    if (res) {
      dispatch({
        type: Types.GET_SURPLUS_NAMES,
        payload: res.data.name,
      });
    }
  } catch (err) {
    dispatch({
      type: Types.GET_ERRORS,
      payload: err.response.data,
    });
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
