import React from "react";
import convertTime from "../helpers/convertTime";

const Card = (props) => {
  return (
    <>
      <article
        className={`p-5 text-center text-white bg-gray-600
        mx-auto w-full h-full rounded-sm flex flex-col items-stretch
        justify-between ${props.gridSpan || ""}`}
      >
        <header className="flex flex-col items-center mb-4">
          <section className="flex flex-row items-center">
            <i className="material-icons text-red-600 text-4xl">
              place
            </i>
            <h2 className="text-lg font-semibold">
              {props.searchResult.name},{" "}
              {props.searchResult.sys.country}
            </h2>
          </section>
          <time className="text-sm text-gray-100 font-thin">
            As of {props.timestamp}
          </time>
        </header>
        <div className="flex flex-row justify-between px-3">
          <section className="flex flex-col-reverse items-center">
            <h2 className="text-3xl font-semibold -mt-6">
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
          <section className="flex flex-col justify-around py-2 text-right mr-2">
            <p className="text-md text-gray-100 w-32">
              Feels like{" "}
              {Math.round(props.searchResult.main.feels_like)}
              &deg;F
            </p>
            <p className="text-md text-gray-100 w-32">
              {Math.round(props.searchResult.main.temp_max)}&deg;F/
              {Math.round(props.searchResult.main.temp_min)}&deg;F
            </p>
            <p className="text-md text-gray-100 w-32">
              {props.searchResult.weather[
                props.searchResult.weather.length - 1
              ].description.replace(/\b[a-z]/g, (char) =>
                char.toUpperCase()
              )}
            </p>
          </section>
        </div>
        <hr className="w-full border border-gray-700 round my-2" />
        <article className="flex flex-row">
          {props.searchHourly.map((hour, index) => {
            if (index <= 5) {
              return (
                <section
                  key={hour.dt}
                  className="flex flex-col py-1 px-1 bg-gray-500 rounded
                  mx-1 shadow hover:shadow-lg duration-100 flex-1"
                >
                  <p className="text-gray-100 text-xs">
                    {convertTime(hour.dt, false)}
                  </p>
                  <img
                    src={`http://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`}
                    alt=""
                  />
                  <h3>{Math.round(hour.temp)}&deg;F</h3>
                </section>
              );
            } else {
              return <React.Fragment key={hour.dt}></React.Fragment>;
            }
          })}
        </article>
      </article>
    </>
  );
};

export default Card;
