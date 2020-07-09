import axios from "axios";
import {
  SEARCH_LOCATION_SUCCESS,
  SEARCH_LOCATION_FAILURE,
  SEARCH_CLEAR,
} from "../../constants/weatherTypes";

const searchLocationSuccessObj = (searchResult) => {
  return {
    type: SEARCH_LOCATION_SUCCESS,
    searchResult,
  };
};
const searchLocationFailureObj = (err) => {
  return {
    type: SEARCH_LOCATION_FAILURE,
    err,
  };
};
export const searchLocation = (fieldVal) => {
  return async (dispatch) => {
    try {
      const searchResult = await axios.get(
        `api.openweathermap.org/data/2.5/weather?q=${fieldVal}&appid${process.env.REACT_APP_API_KEY}`
      );
      console.log(searchResult);
      dispatch(searchLocationSuccessObj(searchResult));
    } catch (err) {
      console.log(err);
      dispatch(searchLocationFailureObj(err));
    }
  };
};

export const searchClear = () => {
  return {
    type: SEARCH_CLEAR,
  };
};
