import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import {
  SEARCHED,
  NOT_SEARCHING,
  FAILED_SEARCH,
} from "../constants/weatherTypes";
import {
  infoClosed,
  infoOpened,
} from "../store/weather/weatherAction";
import DailyInfo from "./DailyInfo";
import DetailedInfo from "./DetailedInfo";
import CurrentWeather from "./currentWeather";
import { SM, MD, LG, XL } from "../constants/mediaQueryTypes";
import StatusAlert from "./StatusAlert";

const variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { staggerChildren: 0.25 },
  },
  exit: {
    opacity: 0,
    transition: { staggerChildren: 0.25, when: "afterChildren" },
  },
};

const showButtonVariants = {
  initial: { scaleX: 0 },
  animate: { scaleX: 1 },
  exit: { scaleX: 0 },
};

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
    // console.log(screenWidth);
    return () =>
      window.removeEventListener("resize", changeScreenWidth);
  }, [screenWidth]);

  const changeShowMode = (e) => {
    e.preventDefault();
    if (props.detailedInfoIsOpen) {
      props.infoClosed();
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    } else {
      props.infoOpened();
    }
  };
  return (
    <AnimatePresence exitBeforeEnter>
      {props.searchStatus === SEARCHED && (
        <motion.article
          className="grid md:grid-rows-2 md:grid-flow-col my-5 gap-5 w-full"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={variants}
          key="weatherGrid"
        >
          <CurrentWeather
            gridSpan="md:col-span-1 md:row-span-1 order-first"
            key="currentWeatherInformation"
          />
          {checkScreenSize("MD") ? (
            true && (
              <>
                <motion.button
                  className="rounded-full px-2 py-1 bg-blue-800 md:hidden block
                  text-white hover:bg-blue-900 duration-100 hover:shadow focus:outline-none"
                  onClick={changeShowMode}
                  variants={showButtonVariants}
                >
                  {props.detailedInfoIsOpen
                    ? "Show Less"
                    : "Show More"}
                </motion.button>
                <AnimatePresence>
                  {props.detailedInfoIsOpen && (
                    <DetailedInfo
                      gridSpan="md:row-span-1 order-2"
                      title="More Information"
                      key="detailedInfo1"
                      initial="initial"
                      animate="animate"
                      exit="exit"
                    />
                  )}
                  {props.detailedInfoIsOpen && (
                    <DailyInfo
                      gridSpan="md:col-span-1 md:row-span-1 order-3"
                      title="Daily"
                      key="dailyInfo1"
                      initial="initial"
                      animate="animate"
                      exit="exit"
                    />
                  )}
                </AnimatePresence>
              </>
            )
          ) : (
            <AnimatePresence>
              <DetailedInfo
                gridSpan="md:row-span-1 order-2"
                title="More Information"
                flex="flex flex-col"
                key="detailedInfo2"
              />
              <DailyInfo
                gridSpan="md:col-span-1 md:row-span-1 order-3"
                title="Daily"
                key="dailyInfo2"
              />
            </AnimatePresence>
          )}
        </motion.article>
      )}
      {props.searchStatus === NOT_SEARCHING && (
        <StatusAlert
          icon="location_off"
          text="Start by searching for a city"
          key="notSearchingStatusAlert"
        />
      )}
      {props.searchStatus === FAILED_SEARCH && (
        <StatusAlert
          icon="wrong_location"
          iconColor="text-red-600"
          text="Invalid city name"
          key="failedSearchStatusAlert"
        />
      )}
    </AnimatePresence>
  );
};

const mapState = (state) => {
  const { searchStatus } = state.weatherData;
  const { detailedInfoIsOpen } = state.infoStatus;
  return {
    searchStatus,
    detailedInfoIsOpen,
  };
};

const mapDispatch = (dispatch) => {
  return {
    infoClosed: () => dispatch(infoClosed()),
    infoOpened: () => dispatch(infoOpened()),
  };
};

export default connect(mapState, mapDispatch)(Weather);
