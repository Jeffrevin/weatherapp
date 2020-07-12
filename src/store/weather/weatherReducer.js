import {
  SEARCH_CLEAR,
  SEARCH_LOCATION_SUCCESS,
  SEARCH_LOCATION_FAILURE,
  SEARCHED,
  NOT_SEARCHING,
  FAILED_SEARCH,
  INFO_OPENED,
  INFO_CLOSED,
} from "../../constants/weatherTypes";

const initialState = {
  searchResult: [],
  searchStatus: NOT_SEARCHING,
  searchIntervals: {},
  searchHourly: {},
  searchDaily: {},
  searchMinutely: {},
  searchCurrent: {},
  detailedInfoIsOpen: false,
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
        searchMinutely: action.searchMinutely,
        timestamp: action.timestamp,
        detailedInfoIsOpen: action.detailedInfoStatus,
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
    case INFO_OPENED:
      return {
        ...state,
        type: action.type,
        detailedInfoIsOpen: true,
      };
    case INFO_CLOSED:
      return {
        ...state,
        type: INFO_CLOSED,
        detailedInfoIsOpen: false,
      };
    default:
      return state;
  }
};

export default weatherReducer;
