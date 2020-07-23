import {
  SEARCH_CLEAR,
  SEARCH_LOCATION_SUCCESS,
  SEARCH_LOCATION_FAILURE,
  SEARCHED,
  NOT_SEARCHING,
  FAILED_SEARCH,
} from "../../../constants/weatherTypes";

const initialState = {
  searchResult: [],
  searchStatus: NOT_SEARCHING,
  searchIntervals: {},
  searchHourly: {},
  searchDaily: {},
  searchMinutely: {},
  searchCurrent: {},
};

const weatherDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_LOCATION_SUCCESS:
      const {
        searchResult,
        searchIntervals,
        searchHourly,
        searchDaily,
        searchCurrent,
        searchMinutely,
        timestamp,
      } = action;
      return {
        ...state,
        searchResult,
        searchStatus: SEARCHED,
        searchIntervals,
        searchHourly,
        searchDaily,
        searchCurrent,
        searchMinutely,
        timestamp,
      };
    case SEARCH_LOCATION_FAILURE:
      return {
        ...state,
        searchStatus: FAILED_SEARCH,
      };
    case SEARCH_CLEAR:
      return {
        ...state,
        searchStatus: NOT_SEARCHING,
      };
    default:
      return state;
  }
};

export default weatherDataReducer;
