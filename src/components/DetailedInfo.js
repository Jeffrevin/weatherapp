import React from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { SEARCHED } from "../constants/weatherTypes";
import InfoSection from "./InfoSection";
import convertTime from "../helpers/convertTime";
import {
  infoClosed,
  infoOpened,
} from "../store/weather/weatherAction";

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
    <>
      {props.searchStatus === SEARCHED && (
        <article className="flex flex-col">
          <button
            className="rounded-full px-2 py-1 mx-auto bg-blue-900 text-white focus:outline-none
            hover:bg-blue-800 hover:shadow duration-100"
            onClick={changeShowMode}
          >
            {props.detailedInfoIsOpen ? "Show Less" : "Show More"}
          </button>
          {
            <CSSTransition
              in={props.detailedInfoIsOpen}
              timeout={200}
              classNames="moreInfo"
              unmountOnExit
            >
              <article
                className="bg-gray-600 rounded px-5 px-5 text-white
            max-w-sm mx-auto w-full shadow mt-4"
              >
                <article>
                  <section>
                    <section className="pt-2 mb-5 flex flex-row justify-around">
                      <div className="flex flex-col items-center">
                        <i className="material-icons relative">
                          wb_sunny
                          <i className="material-icons absolute left-0 text-gray-700">
                            arrow_drop_up
                          </i>
                        </i>
                        <p className="text-lg">
                          Sunrise at{" "}
                          {convertTime(
                            props.searchCurrent.sunrise,
                            false
                          )}
                        </p>
                      </div>

                      <div className="flex flex-col items-center">
                        <i className="material-icons relative">
                          wb_sunny
                          <i className="material-icons absolute left-0 text-gray-700">
                            arrow_drop_down
                          </i>
                        </i>
                        <p className="text-lg">
                          Sunset at{" "}
                          {convertTime(
                            props.searchCurrent.sunset,
                            false
                          )}
                        </p>
                      </div>
                    </section>
                  </section>
                  <section className="flex flex-row justify-around divide-x divide-gray-700">
                    <div className="flex flex-col items-center w-full">
                      <h2>Morning</h2>
                      <h3 className="text-xl">
                        {Math.round(props.searchDaily[0].temp.morn)}
                        &deg;F
                      </h3>
                    </div>
                    <div className="flex flex-col items-center w-full">
                      <h2>Day</h2>
                      <h3 className="text-xl">
                        {Math.round(props.searchDaily[0].temp.day)}
                        &deg;F
                      </h3>
                    </div>
                    <div className="flex flex-col items-center w-full">
                      <h2>Evening</h2>
                      <h3 className="text-xl">
                        {Math.round(props.searchDaily[0].temp.eve)}
                        &deg;F
                      </h3>
                    </div>
                    <div className="flex flex-col items-center w-full">
                      <h2>Night</h2>
                      <h3 className="text-xl">
                        {Math.round(props.searchDaily[0].temp.night)}
                        &deg;F
                      </h3>
                    </div>
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
                  />
                  <InfoSection
                    infoType="Dew Point"
                    infoValue={`${Math.round(
                      props.searchCurrent.dew_point
                    )}\u00B0`}
                    icon="invert_colors"
                  />
                  <InfoSection
                    infoType="Pressure"
                    infoValue={`${hPaToPascals(
                      props.searchCurrent.pressure
                    )} in`}
                    icon="swap_vert"
                  />
                  <InfoSection
                    infoType="Wind Speed"
                    infoValue={`${props.searchCurrent.wind_speed} mph`}
                    icon="clear_all"
                  />
                  <InfoSection
                    infoType="Visibility"
                    infoValue={`${meterToMile(
                      props.searchCurrent.visibility
                    )} mi`}
                    icon="visibility"
                  />
                </section>
              </article>
            </CSSTransition>
          }
        </article>
      )}
    </>
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
