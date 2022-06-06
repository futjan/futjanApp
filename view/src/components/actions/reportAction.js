import * as Type from "./types";
import axios from "axios";

// @route                   POST /ap1/v1/report
// @desc                    create report
// @access                  Private
export const createReport = (data, clearState) => async (dispatch) => {
  try {
    dispatch(setLoading());

    const res = await axios.post("/api/v1/report", data);

    if (res) {
      dispatch({
        type: Type.CREATE_REPORT,
        payload: res.data.report,
      });
      clearState();
    }
  } catch (err) {
    dispatch(clearLoading());
    dispatch({
      type: Type.GET_ERRORS,
      payload: err.response.data,
    });
  }
};
// @route                   GET /api/v1/report/:id
// @desc                    get report by id
// @access                  Private
export const getReportById = (id) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const res = await axios.get(`/api/v1/report/${id}`);

    if (res) {
      dispatch({
        type: Type.GET_REPORT,
        payload: res.data.report,
      });
    }
  } catch (err) {
    dispatch(clearLoading());
    dispatch({
      type: Type.GET_ERRORS,
      payload: err.response.data,
    });
  }
};
// @route                   GET /api/v1/report
// @desc                    get reports
// @access                  Private
export const getReports = (page, limit) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const res = await axios.get(`/api/v1/report?page=${page}&limit=${limit}`);

    if (res) {
      dispatch({
        type: Type.GET_REPORTS,
        payload: res.data,
      });
    }
  } catch (err) {
    dispatch(clearLoading());
    dispatch({
      type: Type.GET_ERRORS,
      payload: err.response.data,
    });
  }
};
const setLoading = () => {
  return {
    type: Type.SET_REPORT_LOADING,
  };
};

const clearLoading = () => {
  return {
    type: Type.CLEAR_REPORT_LOADING,
  };
};
