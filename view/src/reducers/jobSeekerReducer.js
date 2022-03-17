import * as Types from "../components/actions/types";

const initialState = {
  jobSeekers: [],
  jobSeeker: {},
  loading: false,
};

export default function jobSeekerReducer(state = initialState, action) {
  switch (action.type) {
    case Types.SET_JOB_SEEKER_LOADING:
      return {
        ...state,
        loading: true,
      };
    case Types.CLEAR_JOB_SEEKER_LOADING:
      return {
        ...state,
        loading: false,
      };
    case Types.GET_JOB_SEEKERS:
      return {
        ...state,
        jobSeekers: action.payload,
        loading: false,
      };

    case Types.GET_JOB_SEEKER:
      return {
        ...state,
        jobSeeker: action.payload,
        loading: false,
      };

    case Types.UPDATE_JOB_SEEKER:
      return {
        ...state,
        jobSeekers: state.jobSeekers.map((jobSeeker) =>
          jobSeeker._id === action.payload._id ? action.payload : jobSeeker
        ),
        loading: false,
      };
    case Types.DELETE_JOB_SEEKER:
      return {
        ...state,
        jobSeekers: state.jobSeekers.filter(
          (jobSeeker) => jobSeeker._id !== action.payload._id
        ),
      };

    default:
      return state;
  }
}
