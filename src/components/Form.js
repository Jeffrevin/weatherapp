import React, { useState } from "react";
import { connect } from "react-redux";
import { motion } from "framer-motion";
import {
  searchLocation,
  searchClear,
  infoClosed,
} from "../store/weather/weatherAction";

const variants = {
  initial: { scale: 0, opacity: 0 },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const Form = (props) => {
  const [fieldVal, setFieldVal] = useState("");
  const handleTypeLocation = (e) => {
    setFieldVal(e.target.value);
  };
  const handleClearLocation = (e) => {
    e.preventDefault();
    setFieldVal("");
    props.searchClear();
    props.infoClosed();
  };
  const handleSearchLocation = (e) => {
    e.preventDefault();
    props.searchLocation(fieldVal);
  };

  return (
    <motion.form
      className="p-3 w-full bg-gray-100 rounded shadow"
      initial="initial"
      animate="animate"
      variants={variants}
    >
      <article className="flex flex-col">
        <label
          className="text-lg text-indigo-800 font-bold"
          htmlFor=""
        >
          Location Name
        </label>
        <section className="flex flex-row">
          <input
            className="bg-gray-300 w-full rounded-sm p-1 mr-3 border
            border-gray-600 focus:outline-none focus:border-indigo-700
            focus:bg-gray-200 duration-100 focus:placeholder-gray-500
            focus:shadow-md"
            onChange={handleTypeLocation}
            value={fieldVal}
            type="text"
            placeholder="Location name"
            name=""
            id=""
          />
          <button
            className="bg-indigo-600 hover:bg-indigo-700 duration-100 text-lg
          px-2 py-1 rounded-sm text-white focus:outline-none hover:shadow-md"
            onClick={handleSearchLocation}
          >
            Submit
          </button>
          <button
            className="border-2 border-pink-700 duration-100 text-lg
          px-2 py-1 ml-3 rounded-sm text-pink-700 focus:outline-none
          hover:bg-pink-700 hover:text-white hover:shadow-md"
            onClick={handleClearLocation}
          >
            Clear
          </button>
        </section>
      </article>
    </motion.form>
  );
};

const mapDispatch = (dispatch) => {
  return {
    searchLocation: (fieldVal) => {
      dispatch(searchLocation(fieldVal));
    },
    searchClear: () => {
      dispatch(searchClear());
    },
    infoClosed: () => {
      dispatch(infoClosed());
    },
  };
};

export default connect(null, mapDispatch)(Form);
