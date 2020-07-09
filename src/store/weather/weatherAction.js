import axios from "axios";
import {
  SEARCH_LOCATION_SUCCESS,
  SEARCH_LOCATION_FAILURE,
  SEARCH_CLEAR,
} from "../../constants/weatherTypes";

const searchLocationSuccessObj = (searchResult, searchIntervals) => {
  return {
    type: SEARCH_LOCATION_SUCCESS,
    searchResult,
    searchHourly: searchIntervals.hourly,
    searchDaily: searchIntervals.daily,
    searchCurrent: searchIntervals.current,
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
        `http://api.openweathermap.org/data/2.5/weather?q=${fieldVal}&appid=${process.env.REACT_APP_API_KEY}&units=imperial`
      );
      console.log(searchResult.data);
      const searchIntervals = await axios.get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${searchResult.data.coord.lat}&lon=${searchResult.data.coord.lon}&exclude=minutely&appid=${process.env.REACT_APP_API_KEY}&units=imperial`
      );
      console.log(searchIntervals.data);
      dispatch(
        searchLocationSuccessObj(
          searchResult.data,
          searchIntervals.data
        )
      );
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
