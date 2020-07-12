import axios from "axios";
import convertTime from "../../helpers/convertTime";
import {
  SEARCH_LOCATION_SUCCESS,
  SEARCH_LOCATION_FAILURE,
  SEARCH_CLEAR,
  INFO_CLOSED,
  INFO_OPENED,
} from "../../constants/weatherTypes";

const searchLocationSuccessObj = (
  searchResult,
  searchIntervals,
  timestamp
) => {
  return {
    type: SEARCH_LOCATION_SUCCESS,
    searchResult,
    searchHourly: searchIntervals.hourly,
    searchDaily: searchIntervals.daily,
    searchCurrent: searchIntervals.current,
    searchMinutely: searchIntervals.minutely,
    timestamp,
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
        `https://api.openweathermap.org/data/2.5/onecall?lat=${searchResult.data.coord.lat}&lon=${searchResult.data.coord.lon}&appid=${process.env.REACT_APP_API_KEY}&units=imperial`
      );
      console.log(searchIntervals.data);
      dispatch(
        searchLocationSuccessObj(
          searchResult.data,
          searchIntervals.data,
          convertTime(searchResult.data.dt)
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

export const infoClosed = () => {
  return {
    type: INFO_CLOSED,
  };
};

export const infoOpened = () => {
  return {
    type: INFO_OPENED,
  };
};
