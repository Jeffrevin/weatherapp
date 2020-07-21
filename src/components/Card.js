import React, { Fragment } from "react";
import convertTime from "../helpers/convertTime";
import withWeatherContainer from "../hocs/withWeatherContainer";

const Card = (props) => {
  return (
    <>
      <article
        className={`flex flex-col items-stretch
        justify-between h-full ${props.gridSpan || ""}`}
      >
        <header className="flex flex-col items-center mb-4">
          <section className="flex flex-row items-center">
            <i className="material-icons text-red-600 text-4xl">
              place
            </i>
            <h2 className="text-xl font-semibold">
              {props.searchResult.name},{" "}
              {props.searchResult.sys.country}
            </h2>
          </section>
          <time className="text-sm text-gray-100 font-thin">
            As of {props.timestamp}
          </time>
        </header>
        <div
          className="flex flex-row justify-between px-3 h-full
        md:flex-col md:items-center md:justify-around
        lg:flex-row lg:justify-between"
        >
          <section
            className="flex items-center
          md:flex-col-reverse md:h-full
          lg:flex-row"
          >
            <h2 className="text-5xl font-semibold -mt-3">
              {Math.round(props.searchResult.main.temp)}&deg;F
            </h2>
            <img
              src={`http://openweathermap.org/img/wn/${
                props.searchResult.weather.sort(
                  (a, b) => b.id - a.id
                )[props.searchResult.weather.length - 1].icon
              }@2x.png`}
              alt={
                props.searchResult.weather[
                  props.searchResult.weather.length - 1
                ].description
              }
            />
          </section>
          <section
            className="flex flex-col justify-center py-2 text-right mr-2 text-lg
          md:text-center md:m-0 md:h-full
          lg:text-right lg:mr-2"
          >
            <p className="text-gray-100 w-40">
              Feels like{" "}
              {Math.round(props.searchResult.main.feels_like)}
              &deg;F
            </p>
            <p className="text-gray-100 w-40">
              {Math.round(props.searchResult.main.temp_max)}&deg;F/
              {Math.round(props.searchResult.main.temp_min)}&deg;F
            </p>
            <p className="text-gray-100 w-40">
              {props.searchResult.weather[
                props.searchResult.weather.length - 1
              ].description.replace(/\b[a-z]/g, (char) =>
                char.toUpperCase()
              )}
            </p>
          </section>
        </div>

        <div>
          <h1 className="text-center text-3xl mb-3 border-t border-gray-700">
            Hourly
          </h1>
          <article className="flex flex-row">
            {props.searchHourly.map((hour, index) => {
              if (index <= 5) {
                return (
                  <section
                    key={hour.dt}
                    className="flex flex-col py-1 px-1 bg-gray-500 rounded
                  mx-1 shadow hover:shadow-lg duration-100 flex-1 text-center
                  justify-between items-center"
                  >
                    <p className="text-xs text-gray-200 sm:text-lg">
                      {convertTime(hour.dt, false)}
                    </p>
                    <img
                      className="cardImage"
                      src={`http://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`}
                      alt={hour.weather[0].description}
                    />
                    <h3 className="text-sm font-semibold sm:text-3xl">
                      {Math.round(hour.temp)}&deg;F
                    </h3>
                  </section>
                );
              } else {
                return <Fragment key={hour.dt}></Fragment>;
              }
            })}
          </article>
        </div>
      </article>
    </>
  );
};

export default withWeatherContainer(Card);
