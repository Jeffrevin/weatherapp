import {
  SEARCH_CLEAR,
  SEARCH_LOCATION_SUCCESS,
  SEARCH_LOCATION_FAILURE,
} from "../../constants/weatherTypes";

const initialState = {
  searchResult: [],
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_LOCATION_SUCCESS:
      return {
        searchResult: state.searchResult,
      };
    case SEARCH_LOCATION_FAILURE:
      return state;
    case SEARCH_CLEAR:
      return state;
    default:
      return state;
  }
};

export default weatherReducer;
