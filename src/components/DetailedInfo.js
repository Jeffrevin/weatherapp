import React from "react";
import { connect } from "react-redux";
import InfoSection from "./InfoSection";
import convertTime from "../helpers/convertTime";
import TimeOfDay from "./TimeOfDay";
import withWeatherContainer from "../hocs/withWeatherContainer";

const DetailedInfo = (props) => {
  const hPaToPascals = (hPa) => {
    return (hPa * 0.02953).toFixed(2);
  };
  const meterToMile = (meter) => {
    return Math.round(meter * 0.000621371);
  };
  return (
    <article className="p-5 flex flex-col h-full">
      <section className="pt-2 mb-5 flex flex-row flex-wrap justify-around">
        <div className="flex flex-col items-center mx-2">
          <i className="material-icons relative text-orange-400">
            wb_sunny
            <i className="material-icons absolute left-0 right-0 text-gray-800 text-md">
              arrow_drop_up
            </i>
          </i>
          <p className="text-xl">
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
          <p className="text-xl">
            Sunset at {convertTime(props.searchCurrent.sunset, false)}
          </p>
        </div>
      </section>
      <section className="flex flex-row flex-wrap justify-center divide-x divide-gray-700">
        <TimeOfDay title="Morning">
          {Math.round(props.searchDaily[0].temp.morn)}
          &deg;F
        </TimeOfDay>
        <TimeOfDay title="Day">
          {Math.round(props.searchDaily[0].temp.day)}
          &deg;F
        </TimeOfDay>
        <TimeOfDay title="Evening">
          {Math.round(props.searchDaily[0].temp.eve)}
          &deg;F
        </TimeOfDay>
        <TimeOfDay title="Night">
          {Math.round(props.searchDaily[0].temp.night)}
          &deg;F
        </TimeOfDay>
      </section>

      <section
        className="divide-y divide-gray-700 h-full
      flex flex-col justify-around"
      >
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

export default connect(mapState)(withWeatherContainer(DetailedInfo));
