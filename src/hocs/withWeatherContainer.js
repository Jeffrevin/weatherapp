import React from "react";
import { motion } from "framer-motion";

const variants = {
  initial: { translateY: -25, opacity: 0 },
  animate: { translateY: 0, opacity: 1 },
  exit: { translateY: -25, opacity: 0 },
};

const withWeatherContainer = (WeatherContent) => {
  return (props) => (
    <motion.article
      className={`weatherCard ${props.gridSpan || ""} ${
        props.flex || ""
      } ${!props.title && "p-5"}`}
      variants={variants}
    >
      {props.title && (
        <h2
          className="bg-indigo-800 w-full
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
