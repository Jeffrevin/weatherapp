import React from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import InfoSection from "./InfoSection";
import convertTime from "../helpers/convertTime";
import {
  infoClosed,
  infoOpened,
} from "../store/weather/weatherAction";
import TimeOfDay from "./TimeOfDay";

const DetailedInfo = (props) => {
  const changeShowMode = (e) => {
    e.preventDefault();
    if (props.detailedInfoIsOpen) {
      props.infoClosed();
    } else {
      props.infoOpened();
    }
  };
  const hPaToPascals = (hPa) => {
    return (hPa * 0.02953).toFixed(2);
  };
  const meterToMile = (meter) => {
    return Math.round(meter * 0.000621371);
  };
  return (
    // <CSSTransition
    //   in={props.detailedInfoIsOpen}
    //   timeout={200}
    //   classNames="moreInfo"
    //   unmountOnExit
    // >
    <article
      className={`bg-gray-600 rounded-sm p-5 text-white
      mx-auto w-full shadow ${props.gridSpan || ""}`}
    >
      <article>
        <section className="pt-2 mb-5 flex flex-row flex-wrap justify-around">
          <div className="flex flex-col items-center mx-2">
            <i className="material-icons relative text-orange-400">
              wb_sunny
              <i className="material-icons absolute left-0 right-0 text-gray-800 text-md">
                arrow_drop_up
              </i>
            </i>
            <p className="text-lg">
              Sunrise at{" "}
              {convertTime(props.searchCurrent.sunrise, false)}
            </p>
          </div>

          <div className="flex flex-col items-center mx-2">
            <i className="material-icons relative text-yellow-500">
              wb_sunny
              <i className="material-icons absolute left-0 right-0 text-gray-800 text-md">
                arrow_drop_down
              </i>
            </i>
            <p className="text-lg">
              Sunset at{" "}
              {convertTime(props.searchCurrent.sunset, false)}
            </p>
          </div>
        </section>
        <section className="flex flex-row justify-around divide-x divide-gray-700">
          <TimeOfDay title="Morning">
            {Math.round(props.searchDaily[0].temp.morn)}
            &deg;
          </TimeOfDay>
          <TimeOfDay title="Day">
            {Math.round(props.searchDaily[0].temp.day)}
            &deg;
          </TimeOfDay>
          <TimeOfDay title="Evening">
            {Math.round(props.searchDaily[0].temp.eve)}
            &deg;
          </TimeOfDay>
          <TimeOfDay title="Night">
            {Math.round(props.searchDaily[0].temp.night)}
            &deg;
          </TimeOfDay>
        </section>
      </article>

      <section className="divide-y divide-gray-700">
        <InfoSection
          infoType="Cloudiness"
          infoValue={`${props.searchCurrent.clouds}%`}
          icon="cloud"
        />
        <InfoSection
          infoType="Humidity"
          infoValue={`${props.searchCurrent.humidity}%`}
          icon="opacity"
          iconColor="text-teal-400"
        />
        <InfoSection
          infoType="Dew Point"
          infoValue={`${Math.round(
            props.searchCurrent.dew_point
          )}\u00B0`}
          icon="invert_colors"
          iconColor="text-blue-300"
        />
        <InfoSection
          infoType="Pressure"
          infoValue={`${hPaToPascals(
            props.searchCurrent.pressure
          )} in`}
          icon="swap_vert"
          iconColor="text-gray-900"
        />
        <InfoSection
          infoType="Wind Speed"
          infoValue={`${props.searchCurrent.wind_speed} mph`}
          icon="clear_all"
          iconColor="text-gray-400"
        />
        <InfoSection
          infoType="Visibility"
          infoValue={`${meterToMile(
            props.searchCurrent.visibility
          )} mi`}
          icon="visibility"
          iconColor="text-black"
        />
      </section>
    </article>
    // </CSSTransition>
  );
};

const mapState = (state) => {
  return {
    searchCurrent: state.searchCurrent,
    searchStatus: state.searchStatus,
    searchDaily: state.searchDaily,
    detailedInfoIsOpen: state.detailedInfoIsOpen,
  };
};

const mapDispatch = (dispatch) => {
  return {
    infoClosed: () => dispatch(infoClosed()),
    infoOpened: () => dispatch(infoOpened()),
  };
};

export default connect(mapState, mapDispatch)(DetailedInfo);
