import {
  SEARCH_CLEAR,
  SEARCH_LOCATION_SUCCESS,
  SEARCH_LOCATION_FAILURE,
  SEARCHED,
  NOT_SEARCHING,
} from "../../constants/weatherTypes";

const initialState = {
  searchResult: [],
  searchStatus: NOT_SEARCHING,
  searchIntervals: {},
  searchHourly: {},
  searchDaily: {},
  searchCurrent: {},
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_LOCATION_SUCCESS:
      return {
        searchResult: action.searchResult,
        searchStatus: SEARCHED,
        searchIntervals: action.searchIntervals,
        searchHourly: action.searchHourly,
        searchDaily: action.searchDaily,
        searchCurrent: action.searchCurrent,
      };
    case SEARCH_LOCATION_FAILURE:
      return state;
    case SEARCH_CLEAR:
      return {
        ...state,
        searchStatus: NOT_SEARCHING,
      };
    default:
      return state;
  }
};

export default weatherReducer;
