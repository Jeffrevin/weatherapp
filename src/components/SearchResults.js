import React from "react";
import Result from "./Result";

const SearchResults = () => {
  return (
    <div className="p-5 rounded">
      <header>
        <h2 className="text-center text-3xl text-white">
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
