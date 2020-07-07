import React from "react";

const Form = () => {
  return (
    <form className="p-3 bg-gray-300 rounded">
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
            focus:bg-gray-200 duration-100 focus:placeholder-gray-500"
            type="text"
            placeholder="Location name"
            name=""
            id=""
          />
          <button
            className="bg-indigo-600 hover:bg-indigo-700 duration-100 text-lg 
          px-2 py-1 rounded-sm text-white focus:outline-none"
          >
            Submit
          </button>
        </section>
      </article>
    </form>
  );
};

export default Form;
