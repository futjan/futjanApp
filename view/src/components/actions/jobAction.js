import * as Types from "./types";
import axios from "axios";
import { setNotification, clearNotification } from "./notificationAction";
import { logoutUser } from "./authAction";
// @route                   GET /api/v1/job
// @desc                    get all job
// @access                  Public
export const getJobs =
  (
    page,
    limit,
    sort,
    type,
    category,
    subCategory,
    country,
    county,
    city,
    setCategory
  ) =>
  async (dispatch) => {
    dispatch(setLoading());
    dispatch({ type: Types.CLEAR_ERRORS });
    try {
      const res = await axios.get(
        `/api/v1/job?type=${type}&category=${category}&subCategory=${subCategory}&county${county}&country=${country}&city=${city}&page=${page}&limit=${limit}&sort=${sort}`
      );
      if (res.data) {
        dispatch({
          type: Types.GET_JOBS,
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

// @route                   GET /api/v1/job/admin-only
// @desc                    get all job
// @access                  admin only
export const getAdminJobs = (page, limit) => async (dispatch) => {
  dispatch(setLoading());
  dispatch({ type: Types.CLEAR_ERRORS });
  try {
    const res = await axios.get(
      `/api/v1/job/admin-only?page=${page}&limit=${limit}`
    );
    if (res.data) {
      dispatch({
        type: Types.GET_ADMIN_JOBS,
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

// @route                   GET /api/v1/surplus/current-user-surplus
// @desc                    get current user surplus
// @access                  Private

export const getJobsPrivate = (page, limit) => async (dispatch) => {
  dispatch(setLoading());
  dispatch({ type: Types.CLEAR_ERRORS });
  try {
    const res = await axios.get(
      `/api/v1/job/current-user-job?fields=title,category,subCategory,ad_id,images,active,&page=${page}&limit=${limit}`
    );
    if (res.data) {
      dispatch({
        type: Types.GET_USER_JOBS,
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
export const createJob =
  (job, clearState, setSuccessModal) => async (dispatch) => {
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
        setSuccessModal(
          res.data && res.data.job && res.data.job.title,
          res.data && res.data.job && res.data.job.ad_id
        );
        dispatch(setNotification("Ad successfully posted!", "success"));

        setTimeout(() => {
          dispatch(clearNotification());
        }, 5000);
      }
    } catch (err) {
      dispatch(clearLoading());
      if (err) {
        dispatch(setNotification(err.response.data.message, "error"));

        setTimeout(() => {
          dispatch(clearNotification());
        }, 5000);

        if (err.response.data.message === "jwt expired") {
          dispatch(logoutUser());
        }
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
        type: Types.GET_JOB,
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

// @route                   CREATE /api/v1/comments
// @desc                    create comment
// @access                  Private
export const createComment = (comment, clearState) => async (dispatch) => {
  try {
    dispatch({
      type: Types.CLEAR_ERRORS,
    });
    const res = await axios.post("/api/v1/comments", comment);

    if (res) {
      dispatch({
        type: Types.GET_JOB,
        payload: res.data.job,
      });
      clearState();
      dispatch(setNotification("Comment Added to ad successfully!", "success"));

      setTimeout(() => {
        dispatch(clearNotification());
      }, 5000);
    }
  } catch (err) {
    dispatch(setNotification(err.response.data.message, "error"));

    setTimeout(() => {
      dispatch(clearNotification());
    }, 5000);

    if (err.response.data.message === "jwt expired") {
      dispatch(logoutUser());
    }
    dispatch({
      type: Types.GET_ERRORS,
      payload: err.response.data,
    });
  }
};

// @route                   PATCH /api/v1/job/:id
// @desc                    update job by id
// @access                  Private
export const updateJob = (data, clearState) => async (dispatch) => {
  dispatch(setLoading());
  let formDate = new FormData();
  data.files.forEach((file) => formDate.append("photo", file));

  formDate.append("job", JSON.stringify(data.job));

  const config = {
    headers: {
      "content-type": "multipart/form-data",
    },
  };
  try {
    // const res = await axios.patch("/api/v1/surplus", formDate, config);
    const res = await axios.patch(`/api/v1/job/${data.id}`, formDate, config);

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
      dispatch(setNotification("Ad successfully updated!", "success"));

      setTimeout(() => {
        dispatch(clearNotification());
      }, 5000);
    }
  } catch (err) {
    dispatch(clearLoading());
    if (err) {
      dispatch(setNotification(err.response.data.message, "error"));

      setTimeout(() => {
        dispatch(clearNotification());
      }, 5000);

      if (err.response.data.message === "jwt expired") {
        dispatch(logoutUser());
      }
      dispatch({
        type: Types.GET_ERRORS,
        payload: err.response.data,
      });
    }
  }
};
// @route                   PATCH /ap1/v1/surplus/views
// @desc                    update views
// @access                  Public
export const updateViews = (data) => async (dispatch) => {
  try {
    await axios.patch("/api/v1/job/views", data);
  } catch (err) {
    if (err) {
      dispatch({
        type: Types.GET_ERRORS,
        payload: err.response.data,
      });
    }
  }
};

export const deleteImageFromCloud = (data) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const res = await axios.patch("/api/v1/job/delete-image", data);
    if (res) {
      dispatch({
        type: Types.GET_JOB,
        payload: res.data.job,
      });
      dispatch(setNotification("Image successfully deleted!", "success"));

      setTimeout(() => {
        dispatch(clearNotification());
      }, 5000);
    }
  } catch (err) {
    dispatch(setNotification(err.response.data.message, "error"));

    setTimeout(() => {
      dispatch(clearNotification());
    }, 5000);
    dispatch(clearLoading());
    if (err) {
      if (err.response.data.message === "jwt expired") {
        dispatch(logoutUser());
      }
      dispatch({
        type: Types.GET_ERRORS,
        payload: err.response.data,
      });
    }
  }
};
// @route                   PATCH /api/v1/job/activate
// @desc                    activate job
// @access                  Private
export const jobActivate = (data) => async (dispatch) => {
  dispatch(setLoading());
  dispatch({
    type: Types.CLEAR_ERRORS,
  });
  try {
    const res = await axios.patch("/api/v1/job/activate", data);
    if (res) {
      dispatch({
        type: Types.ACTIVATE_JOB,
        payload: res.data.job,
      });
      dispatch(setNotification("Ad activation completed!", "success"));

      setTimeout(() => {
        dispatch(clearNotification());
      }, 5000);
    }
  } catch (err) {
    dispatch(clearLoading());
    if (err) {
      dispatch(setNotification(err.response.data.message, "error"));

      setTimeout(() => {
        dispatch(clearNotification());
      }, 5000);

      if (err.response.data.message === "jwt expired") {
        dispatch(logoutUser());
      }
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
      dispatch(setNotification("Ad successfully deleted!", "success"));

      setTimeout(() => {
        dispatch(clearNotification());
      }, 5000);
    }
  } catch (err) {
    dispatch(clearLoading());
    if (err) {
      dispatch(setNotification(err.response.data.message, "error"));

      setTimeout(() => {
        dispatch(clearNotification());
      }, 5000);

      if (err.response.data.message === "jwt expired") {
        dispatch(logoutUser());
      }
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
    if (err.response.data.message === "jwt expired") {
      dispatch(logoutUser());
    }
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
