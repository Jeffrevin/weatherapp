import React from "react";
import { connect } from "react-redux";
import Card from "./Card";

const CurrentWeather = (props) => {
  return (
    <Card
      searchResult={props.searchResult}
      searchHourly={props.searchHourly}
      timestamp={props.timestamp}
    />
  );
};

const mapState = (state) => {
  return {
    searchResult: state.searchResult,
    searchHourly: state.searchHourly,
    timestamp: state.timestamp,
  };
};

export default connect(mapState)(CurrentWeather);
