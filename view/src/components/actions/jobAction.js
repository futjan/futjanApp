import * as Types from "./types";
import axios from "axios";

// @route                   GET /api/v1/job
// @desc                    get all job
// @access                  Public
export const getJobs =
  () =>
  // page,
  // limit,
  // sort,
  // businessType,
  // category,
  // keyword,
  // country,
  // county,
  // city,
  // setCategory
  async (dispatch) => {
    dispatch(setLoading());
    dispatch({ type: Types.CLEAR_ERRORS });
    try {
      const res = await axios.get("/api/v1/job");
      if (res.data) {
        dispatch({
          type: Types.GET_JOBS,
          payload: res.data.jobs,
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

// @route                   GET /api/v1/surplus/current-user-surplus
// @desc                    get current user surplus
// @access                  Private

export const getSurplusesPrivate = () => async (dispatch) => {
  dispatch(setLoading());
  dispatch({ type: Types.CLEAR_ERRORS });
  try {
    const res = await axios.get(
      `/api/v1/surplus/current-user-surplus?fields=name,category,businessType,originalPrice,offeredPrice,discount,active`
    );
    if (res.data) {
      dispatch({
        type: Types.GET_CURRENT_USER_SURPLUSES,
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
export const createJob = (job, clearState) => async (dispatch) => {
  let formDate = new FormData();
  job.files.forEach((file) => formDate.append("photo", file));

  formDate.append("job", JSON.stringify(job));
  const config = {
    headers: {
      "content-type": "multipart/form-data",
    },
  };
  dispatch(setLoading());
  dispatch({
    type: Types.CLEAR_ERRORS,
  });
  try {
    const res = await axios.post("/api/v1/job", formDate, config);
    // const res = await axios.post("/api/v1/job", job);
    if (res) {
      dispatch({
        type: Types.CREATE_JOB,
        payload: res.data.job,
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

// @route                   GET /api/v1/job/:id
// @desc                    get surplus by id
// @access                  Public
export const getJobById = (id) => async (dispatch) => {
  dispatch(setLoading());
  dispatch({
    type: Types.CLEAR_ERRORS,
  });
  try {
    const res = await axios.get(`/api/v1/job/${id}`);
    if (res) {
      dispatch({
        type: Types.GET_SURPLUS,
        payload: res.data.job,
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

// @route                   PATCH /api/v1/job/:id
// @desc                    update job by id
// @access                  Private
export const updateSurplus = (job, clearState) => async (dispatch) => {
  //   let formDate = new FormData();
  //   data.files.forEach((file) => formDate.append("photo", file));

  //   formDate.append("surplus", data.surplus);
  //   formDate.append("id", data.id);
  //   const config = {
  //     headers: {
  //       "content-type": "multipart/form-data",
  //     },
  //   };
  //   dispatch(setLoading());
  //   dispatch({
  //     type: Types.CLEAR_ERRORS,
  //   });
  try {
    // const res = await axios.patch("/api/v1/surplus", formDate, config);
    const res = await axios.patch("/api/v1/job", job);

    dispatch(clearLoading());

    if (res) {
      dispatch({
        type: Types.UPDATE_JOB,
        payload: res.data.job,
      });
      clearState();
      //   dispatch({
      //     type: Types.GET_SURPLUS,
      //     payload: {},
      //   });
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
// @route                   PATCH /api/v1/surplus/activate
// @desc                    activate surplus
// @access                  Private
export const surplusActivate = (data) => async (dispatch) => {
  dispatch(setLoading());
  dispatch({
    type: Types.CLEAR_ERRORS,
  });
  try {
    const res = await axios.patch("/api/v1/surplus/activate", data);
    if (res) {
      dispatch({
        type: Types.ACTIVATE_SURPLUS,
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

// @route                   DELETE /api/v1/job/:id
// @desc                    delete job by id
// @access                  Private
export const deleteJob = (id) => async (dispatch) => {
  dispatch(setLoading());
  dispatch({
    type: Types.CLEAR_ERRORS,
  });
  try {
    const res = await axios.delete(`/api/v1/job/${id}`);
    if (res) {
      dispatch({
        type: Types.DELETE_JOB,
        payload: res.data.job,
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

// @route                   GET /api/v1/surplus/keyword
// @desc                    get surplus keyword
// @access                  public
// export const getSurplusNames = () => async (dispatch) => {
// export const getSurplusKeywords = () => async (dispatch) => {
//   dispatch({
//     type: Types.CLEAR_ERRORS,
//   });
//   try {
//     const res = await axios.get("/api/v1/surplus/keyword");

//     if (res) {
//       dispatch({
//         type: Types.GET_SURPLUS_KEYWORDS,
//         payload: res.data.keywords,
//       });
//     }
//   } catch (err) {
//     dispatch({
//       type: Types.GET_ERRORS,
//       payload: err.response.data,
//     });
//   }
// };

// @route                   CREATE /api/v1/review
// @desc                    create review
// @access                  Private
export const createReview = (review, clearState) => async (dispatch) => {
  try {
    dispatch({
      type: Types.CLEAR_ERRORS,
    });
    const res = await axios.post("/api/v1/review", review);

    if (res) {
      dispatch({
        type: Types.GET_SURPLUS,
        payload: res.data.surplus,
      });
      clearState();
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
    type: Types.SET_JOB_LOADING,
  };
};

const clearLoading = () => {
  return {
    type: Types.CLEAR_JOB_LOADING,
  };
};
