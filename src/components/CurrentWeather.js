import React from "react";
import { connect } from "react-redux";
import {
  SEARCHED,
  NOT_SEARCHING,
  FAILED_SEARCH,
} from "../constants/weatherTypes";
import Card from "./Card";
import StatusAlert from "./StatusAlert";

const CurrentWeather = (props) => {
  return (
    <>
      {props.searchStatus === SEARCHED && (
        <Card
          searchResult={props.searchResult}
          timestamp={props.timestamp}
        />
      )}{" "}
      {props.searchStatus === NOT_SEARCHING && (
        <StatusAlert
          icon="location_off"
          text="Start by searching for a city"
        />
      )}
      {props.searchStatus === FAILED_SEARCH && (
        <StatusAlert
          icon="wrong_location"
          iconColor="text-red-600"
          text="Invalid city name"
        />
      )}
    </>
  );
};

const mapState = (state) => {
  return {
    searchResult: state.searchResult,
    searchStatus: state.searchStatus,
    timestamp: state.timestamp,
  };
};

export default connect(mapState)(CurrentWeather);
