import * as types from './actionTypes'
const initialState = {
  data: [],
  isFetching: false,
  error: false,

  data1:'',
  isFetching1:false,
  error1: false,
};

export default function dataReducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCHING_DATA:
      return {
        ...state,
        data: [],
        isFetching: true
      };
      break;
    case types.FETCHING_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.data
      };
      break;
    case types.FETCHING_DATA_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true
      };
      break;

    case types.FETCHING_DATA1:
      return {
        ...state,
        data1: '',
        isFetching1: true
      };
      break;
    case types.FETCHING_PERSON_SUCCESS:
      return {
        ...state,
        isFetching1: false,
        data1: action.data1
      };
      break;
    case types.FETCHING_PERSON_FAILURE:
      return {
        ...state,
        isFetching1: false,
        error1: true
      };
      break;
    default:
      return state;
      break;
  }
}
