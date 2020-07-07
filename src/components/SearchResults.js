import React from "react";
import Result from "./Result";

const SearchResults = () => {
  return (
    <div className="p-5 rounded bg-indigo-400">
      <header>
        <h2 className="text-center text-3xl text-black">
          Search Results
        </h2>
      </header>
      <article className="flex flex-col">
        <Result />
        <Result />
      </article>
    </div>
  );
};

export default SearchResults;
