import React from "react";
import { connect } from "react-redux";
import {
  CSSTransition,
  TransitionGroup,
} from "react-transition-group";
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
      <TransitionGroup className="currentSections">
        {props.searchStatus === SEARCHED && (
          <CSSTransition classNames="mainCard" timeout={200}>
            <Card
              searchResult={props.searchResult}
              searchHourly={props.searchHourly}
              timestamp={props.timestamp}
            />
          </CSSTransition>
        )}
        {props.searchStatus === NOT_SEARCHING && (
          <CSSTransition classNames="notSearchingAlert" timeout={200}>
            <StatusAlert
              icon="location_off"
              text="Start by searching for a city"
            />
          </CSSTransition>
        )}
        {props.searchStatus === FAILED_SEARCH && (
          <CSSTransition classNames="failedSearchAlert" timeout={200}>
            <StatusAlert
              icon="wrong_location"
              iconColor="text-red-600"
              text="Invalid city name"
            />
          </CSSTransition>
        )}
      </TransitionGroup>
    </>
  );
};

const mapState = (state) => {
  return {
    searchResult: state.searchResult,
    searchStatus: state.searchStatus,
    searchHourly: state.searchHourly,
    timestamp: state.timestamp,
  };
};

export default connect(mapState)(CurrentWeather);
