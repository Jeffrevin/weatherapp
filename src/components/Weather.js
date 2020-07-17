import React from "react";
import { connect } from "react-redux";
import { SEARCHED } from "../constants/weatherTypes";
import {
  infoClosed,
  infoOpened,
} from "../store/weather/weatherAction";
import CurrentWeather from "./CurrentWeather";
import DailyInfo from "./DailyInfo";
import DetailedInfo from "./DetailedInfo";

const Weather = (props) => {
  const changeShowMode = (e) => {
    e.preventDefault();
    if (props.detailedInfoIsOpen) {
      props.infoClosed();
    } else {
      props.infoOpened();
    }
  };
  return (
    <>
      {props.searchStatus === SEARCHED ? (
        <article className="grid sm:grid-rows-2 sm:grid-flow-col my-5 gap-4">
          <CurrentWeather gridSpan="sm:col-span-2 sm:row-span-1" />
          <DailyInfo gridSpan="sm:col-span-1 sm:row-span-1" />
          <DetailedInfo gridSpan="sm:row-span-1" />
        </article>
      ) : (
        <CurrentWeather />
      )}
    </>
  );
};

const mapState = (state) => {
  return {
    searchStatus: state.searchStatus,
  };
};

const mapDispatch = (dispatch) => {
  return {
    infoClosed: () => dispatch(infoClosed()),
    infoOpened: () => dispatch(infoOpened()),
  };
};

export default connect(mapState, mapDispatch)(Weather);
