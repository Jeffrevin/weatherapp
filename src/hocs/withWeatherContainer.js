import React from "react";
import { motion } from "framer-motion";

const variants = {
  initial: { translateY: -15, opacity: 0 },
  animate: { translateY: 0, opacity: 1 },
  exit: { translateY: -5, opacity: 0 },
};

const withWeatherContainer = (WeatherContent) => {
  return (props) => (
    <motion.article
      className={`weatherCard ${props.gridSpan || ""} ${
        props.flex || ""
      } ${!props.title && "p-5"}`}
      variants={variants}
      // initial="initial"
      // animate="animate"
      // exit="exit"
      initial={props.initial || ""}
      animate={props.animate || ""}
      exit={props.exit || ""}
    >
      {props.title && (
        <h2
          className="bg-gray-700 w-full
        text-center text-white text-4xl rounded-t-sm"
        >
          {props.title}
        </h2>
      )}
      <WeatherContent {...props} />
    </motion.article>
  );
};

export default withWeatherContainer;
