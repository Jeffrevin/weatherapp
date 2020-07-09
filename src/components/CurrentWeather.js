import React from "react";
import { connect } from "react-redux";
import { SEARCHED, NOT_SEARCHING } from "../constants/weatherTypes";

const CurrentWeather = (props) => {
  return (
    <>
      {props.searchStatus === SEARCHED && (
        <article className="p-5 my-5 rounded text-center text-white bg-gray-600 flex flex-col items-center shadow hover:shadow-md">
          <header className="flex flex-row items-center">
            <i className="material-icons text-red-600 text-4xl">
              location_on
            </i>
            <h2 className="text-md font-semibold">
              {props.searchResult.name},{" "}
              {props.searchResult.sys.country}
            </h2>
          </header>
          <section className="flex flex-col items-center">
            <h2 className="text-5xl font-semibold">
              {Math.round(props.searchResult.main.temp)}&deg;F
            </h2>
            <p className="text-lg font-thin text-gray-100">
              {Math.round(props.searchResult.main.temp_max)}&deg;F/
              {Math.round(props.searchResult.main.temp_min)}&deg;F
            </p>
            <img
              src={`http://openweathermap.org/img/wn/${props.searchResult.weather[0].icon}@2x.png`}
              alt={props.searchResult.weather[0].description}
            />
            <p className="font-light text-gray-100">
              Feels like{" "}
              {Math.round(props.searchResult.main.feels_like)}&deg;F
            </p>
            <h3 className="text-3xl">
              {props.searchResult.weather[0].main}
            </h3>
          </section>
        </article>
      )}{" "}
      {props.searchStatus === NOT_SEARCHING && (
        <article className="my-3 text-white text-center">
          <i className="material-icons text-gray-400 text-6xl">
            location_off
          </i>
          <h2 className="text-3xl">Start by searching for a city</h2>
        </article>
      )}
    </>
  );
};

const mapState = (state) => {
  return {
    searchResult: state.searchResult,
    searchStatus: state.searchStatus,
  };
};

export default connect(mapState)(CurrentWeather);
