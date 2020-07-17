import React from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import getDayOfWeek from "../helpers/getDayOfWeek";

const DailyInfo = (props) => {
  return (
    // <CSSTransition
    //   in={props.detailedInfoIsOpen}
    //   timeout={200}
    //   classNames="dailyInfo"
    //   unmountOnExit
    // >
    <article
      className={`bg-gray-600 rounded-sm mx-auto w-full shadow
      text-white p-5 divide-y divide-gray-700 flex flex-col justify-between
      ${props.gridSpan || ""}`}
    >
      {props.searchDaily.map((day, index) => {
        return index !== 0 ? (
          <section
            className="flex flex-row justify-between items-center"
            key={day.dt}
          >
            <p className="text-lg">{getDayOfWeek(day.dt)}</p>
            <div className="flex flex-row-reverse items-center">
              <p className="text-lg">
                {Math.round(day.temp.max)}&deg;F/
                {Math.round(day.temp.min)}&deg;F
              </p>
              <img
                className="w-10 mr-3"
                src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                alt={day.weather[0].description}
              />
            </div>
          </section>
        ) : (
          <section
            className="flex flex-row justify-between items-center"
            key={day.dt}
          >
            <p className="text-lg">Today</p>
            <div className="flex flex-row-reverse items-center">
              <p className="text-lg">
                {Math.round(day.temp.max)}&deg;F/
                {Math.round(day.temp.min)}&deg;F
              </p>
              <img
                className="w-10 mr-3"
                src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                alt={day.weather[0].description}
              />
            </div>
          </section>
        );
      })}
    </article>
    // </CSSTransition>
  );
};

const mapState = (state) => {
  return {
    searchDaily: state.searchDaily,
    detailedInfoIsOpen: state.detailedInfoIsOpen,
  };
};

export default connect(mapState)(DailyInfo);
