import React, { useState } from "react";
import { connect } from "react-redux";

const Form = () => {
  const [fieldVal, setFieldVal] = useState("");
  const handleClearLocation = (e) => {
    e.preventDefault();
  };
  const handleSearchLocation = (e) => {
    e.preventDefault();
  };

  return (
    <form className="p-3 bg-gray-100 rounded shadow">
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
            type="text"
            placeholder="Location name"
            name=""
            id=""
          />
          <button
            className="bg-indigo-600 hover:bg-indigo-700 duration-100 text-lg 
          px-2 py-1 rounded-sm text-white focus:outline-none hover:shadow-md"
          >
            Submit
          </button>
          <button
            className="border-2 border-pink-700 duration-100 text-lg
          px-2 py-1 ml-3 rounded-sm text-pink-700 focus:outline-none
          hover:bg-pink-700 hover:text-white hover:shadow-md"
          >
            Clear
          </button>
        </section>
      </article>
    </form>
  );
};

const mapDispatch = () => {};

export default Form;
