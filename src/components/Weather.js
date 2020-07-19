import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { SEARCHED } from "../constants/weatherTypes";
import {
  infoClosed,
  infoOpened,
} from "../store/weather/weatherAction";
import CurrentWeather from "./CurrentWeather";
import DailyInfo from "./DailyInfo";
import DetailedInfo from "./DetailedInfo";
import { SM, MD, LG, XL } from "../constants/mediaQueryTypes";

const Weather = (props) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const checkScreenSize = (screenSize) => {
    if (screenSize === "SM" && screenWidth < SM) return true;
    else if (screenSize === "MD" && screenWidth < MD) return true;
    else if (screenSize === "LG" && screenWidth < LG) return true;
    else if (screenSize === "XL" && screenWidth < XL) return true;
    else return false;
  };

  useEffect(() => {
    const changeScreenWidth = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", changeScreenWidth);
    console.log(screenWidth);
    return () =>
      window.removeEventListener("resize", changeScreenWidth);
  }, [screenWidth]);

  const changeShowMode = (e) => {
    // console.log(props.detailedInfoIsOpen);
    e.preventDefault();
    if (props.detailedInfoIsOpen) props.infoClosed();
    else props.infoOpened();
  };
  return (
    <>
      {props.searchStatus === SEARCHED ? (
        <article className="grid md:grid-rows-2 md:grid-flow-col my-5 gap-4">
          <CurrentWeather gridSpan="md:col-span-2 md:row-span-1 order-first" />
          {checkScreenSize("MD") ? (
            true && (
              <>
                <button
                  className="rounded-full px-2 py-1 bg-blue-800 md:hidden block
              text-white hover:bg-blue-900 duration-100 hover:shadow focus:outline-none"
                  onClick={changeShowMode}
                >
                  Show More
                </button>
                {props.detailedInfoIsOpen && (
                  <>
                    <DailyInfo gridSpan="md:col-span-1 md:row-span-1 order-3" />
                    <DetailedInfo gridSpan="md:row-span-1 order-2" />
                  </>
                )}
              </>
            )
          ) : (
            <>
              <DailyInfo gridSpan="md:col-span-1 md:row-span-1 order-3" />
              <DetailedInfo gridSpan="md:row-span-1 order-2" />
            </>
          )}
        </article>
      ) : (
        <CurrentWeather />
      )}
    </>
  );
};

const mapState = (state) => {
  return {
    searchStatus: state.searchStatus,
    detailedInfoIsOpen: state.detailedInfoIsOpen,
  };
};

const mapDispatch = (dispatch) => {
  return {
    infoClosed: () => dispatch(infoClosed()),
    infoOpened: () => dispatch(infoOpened()),
  };
};

export default connect(mapState, mapDispatch)(Weather);
