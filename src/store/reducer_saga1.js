import * as types from './actionTypes'
const initialState = {
  data: [],
  dataFetched: false,
  isFetching: false,
  error: false
}

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
    default:
      return state;
      break;
  }
}
