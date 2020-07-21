import React from "react";
import { connect } from "react-redux";
import getDayOfWeek from "../helpers/getDayOfWeek";
import withWeatherContainer from "../hocs/withWeatherContainer";

const DailyInfo = (props) => {
  return (
    <article
      className={`p-5 divide-y divide-gray-700
      flex flex-col justify-between`}
    >
      {props.searchDaily.map((day, index) => {
        return index !== 0 ? (
          <section
            className="flex flex-row justify-between items-center h-full md:flex-col lg:flex-row py-2"
            key={day.dt}
          >
            <p className="md:text-2xl text-lg lg:text-lg">
              {getDayOfWeek(day.dt)}
            </p>
            <div className="flex flex-row-reverse items-center md:w-full md:justify-between lg:justify-start mt-2">
              <p className="text-lg">
                {Math.round(day.temp.max)}&deg;F/
                {Math.round(day.temp.min)}&deg;F
              </p>
              <img
                className="w-10 ml-2 md:m-0"
                src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                alt={day.weather[0].description}
              />
            </div>
          </section>
        ) : (
          <section
            className="flex flex-row justify-between items-center h-full md:flex-col lg:flex-row py-2"
            key={day.dt}
          >
            <p className="md:text-2xl text-lg lg:text-lg">Today</p>
            <div className="flex flex-row-reverse items-center md:w-full md:justify-between lg:justify-start mt-2">
              <p className="text-lg">
                {Math.round(day.temp.max)}&deg;F/
                {Math.round(day.temp.min)}&deg;F
              </p>
              <img
                className="w-10 ml-2 md:m-0"
                src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                alt={day.weather[0].description}
              />
            </div>
          </section>
        );
      })}
    </article>
  );
};

const mapState = (state) => {
  return {
    searchDaily: state.searchDaily,
    detailedInfoIsOpen: state.detailedInfoIsOpen,
  };
};

export default connect(mapState)(withWeatherContainer(DailyInfo));
