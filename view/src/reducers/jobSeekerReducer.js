import * as Types from "../components/actions/types";

const initialState = {
  jobSeekers: [],
  adminJobSeekers: [],
  jobSeeker: {},
  totalDocs: 0,
  result: 0,
  privateJobSeeker: [],
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
        jobSeekers: action.payload.jobSeekers,
        totalDocs: action.payload.totalDocs,
        result: action.payload.result,
        loading: false,
      };
    case Types.GET_ADMIN_JOBSEEKERS:
      return {
        ...state,
        adminJobSeekers: action.payload.jobSeekers,
        totalDocs: action.payload.totalDocs,
        result: action.payload.result,
        loading: false,
      };
    case Types.GET_PRIVATE_JOB_SEEKERS:
      return {
        ...state,
        privateJobSeeker: action.payload.jobSeekers,
        totalDocs: action.payload.totalDocs,
        result: action.payload.result,
        loading: false,
      };

    case Types.GET_JOB_SEEKER:
      return {
        ...state,
        jobSeeker: action.payload,
        loading: false,
      };
    case Types.ACTIVATE_JOBSEEKER:
      return {
        ...state,
        adminJobSeekers: state.adminJobSeekers.map((cand) =>
          cand._id === action.payload._id ? action.payload : cand
        ),
        jobSeeker: action.payload,
        privateJobSeeker: state.privateJobSeeker.map((cand) =>
          cand._id === action.payload._id ? action.payload : cand
        ),
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

        adminJobSeekers: state.adminJobSeekers.filter(
          (jobSeeker) => jobSeeker._id !== action.payload._id
        ),

        privateJobSeeker: state.privateJobSeeker.filter(
          (jobSeeker) => jobSeeker._id !== action.payload._id
        ),
      };

    default:
      return state;
  }
}
