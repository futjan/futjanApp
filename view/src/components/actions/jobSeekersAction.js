import * as Types from "./types";
import axios from "axios";

// @route                   GET /api/v1/jobseekers
// @desc                    get all job
// @access                  Public
export const getJobSeekers =
  (
    page,
    limit,
    sort,
    salaryType,
    category,
    subCategory,
    country,

    setCategory
  ) =>
  async (dispatch) => {
    dispatch(setLoading());
    dispatch({ type: Types.CLEAR_ERRORS });
    try {
      const res = await axios.get(
        `/api/v1/jobseekers?category=${category}&subCategory=${subCategory}&salaryType=${salaryType}&country=${country}&page=${page}&limit=${limit}&sort=${sort}&fields=currency,name,title,rate,salaryType,photo,skills,country`
        // `/api/v1/jobseekers`
      );
      if (res.data) {
        dispatch({
          type: Types.GET_JOB_SEEKERS,
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
// @route                   GET /api/v1/jobseekers/admin-only
// @desc                    get all job
// @access                  admin only
export const getAdminJobSeekers = (page, limit) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const res = await axios.get(
      `/api/v1/jobseekers/admin-only?&page=${page}&limit=${limit}&fields=name,title,active,photo,skills`
      // `/api/v1/jobseekers`
    );
    if (res.data) {
      dispatch({
        type: Types.GET_ADMIN_JOBSEEKERS,
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

// @route                   PATCH /api/v1/jobseekers/activate
// @desc                    activate jobseeker
// @access                  Private
export const activateJobSeeker = (data) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const res = await axios.patch(`/api/v1/jobseekers/activate`, data);
    if (res.data) {
      dispatch({
        type: Types.ACTIVATE_JOBSEEKER,
        payload: res.data.jobSeeker,
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
// @route                   GET /api/v1/jobseekers/current-user
// @desc                    get all private jobseeker
// @access                  Public
export const getPrivateJobSeeker =
  (page, limit, sort, salaryType, category, subCategory, country) =>
  async (dispatch) => {
    dispatch(setLoading());
    dispatch({ type: Types.CLEAR_ERRORS });
    try {
      const res = await axios.get(
        // `/api/v1/jobseekers/current-user?category=${category}&subCategory=${subCategory}&salaryType=${salaryType}&country=${country}&page=${page}&limit=${limit}&sort=${sort}&fields=name,title,rate,salaryType,photo,skills,country`
        `/api/v1/jobseekers/current-user?fields=name,title,photo,email,category,subCategory,experience`
        // `/api/v1/jobseekers`
      );
      if (res.data) {
        dispatch({
          type: Types.GET_PRIVATE_JOB_SEEKERS,
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
export const createJobSeeker =
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
      const res = await axios.post("/api/v1/jobseekers", formDate, config);
      // const res = await axios.post("/api/v1/jobseekers", job);
      if (res) {
        dispatch({
          type: Types.CREATE_JOB_SEEKER,
          payload: res.data.jobSeeker,
        });
        clearState();
        setSuccessModal(
          res.data && res.data.jobSeeker && res.data.jobSeeker.title
        );
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

// @route                   GET /api/v1/jobseekers/:id
// @desc                    get surplus by id
// @access                  Public
export const getJobSeekerById = (id) => async (dispatch) => {
  dispatch(setLoading());
  dispatch({
    type: Types.CLEAR_ERRORS,
  });
  try {
    const res = await axios.get(`/api/v1/jobseekers/${id}`);
    if (res) {
      dispatch({
        type: Types.GET_JOB_SEEKER,
        payload: res.data.jobSeeker,
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

// @route                   PATCH /api/v1/jobseekers/:id
// @desc                    update job by id
// @access                  Private
export const updateJobSeeker = (job, clearState) => async (dispatch) => {
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
    const res = await axios.patch(`/api/v1/jobseekers/${job.id}`, job);

    dispatch(clearLoading());

    if (res) {
      dispatch({
        type: Types.UPDATE_JOB_SEEKER,
        payload: res.data.jobSeeker,
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

// @route                   DELETE /api/v1/jobseekers/:id
// @desc                    delete job by id
// @access                  Private
export const deleteJobSeeker = (id) => async (dispatch) => {
  dispatch(setLoading());
  dispatch({
    type: Types.CLEAR_ERRORS,
  });
  try {
    const res = await axios.delete(`/api/v1/jobseekers/${id}`);
    if (res) {
      console.log(res.data.jobSeeker);
      dispatch({
        type: Types.DELETE_JOB_SEEKER,
        payload: res.data.jobSeeker,
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

// @route                   CREATE /api/v1/review
// @desc                    create review
// @access                  Private
// export const createReview = (review, clearState) => async (dispatch) => {
//   try {
//     dispatch({
//       type: Types.CLEAR_ERRORS,
//     });
//     const res = await axios.post("/api/v1/review", review);

//     if (res) {
//       dispatch({
//         type: Types.GET_SURPLUS,
//         payload: res.data.surplus,
//       });
//       clearState();
//     }
//   } catch (err) {
//     dispatch({
//       type: Types.GET_ERRORS,
//       payload: err.response.data,
//     });
//   }
// };

const setLoading = () => {
  return {
    type: Types.SET_JOB_SEEKER_LOADING,
  };
};

const clearLoading = () => {
  return {
    type: Types.CLEAR_JOB_SEEKER_LOADING,
  };
};
