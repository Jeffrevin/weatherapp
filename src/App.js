import React from "react";
import { connect } from "react-redux";
import Form from "./components/Form";
import Weather from "./components/Weather";

const App = () => {
  return (
    <div className="bg-gray-900 min-h-full">
      <header className="bg-indigo-200 text-center text-6xl h-40 bgImg bg-fixed">
        Weather App
      </header>
      <main className="container mx-auto">
        <div className="mx-2 -my-12 pb-3">
          <Form />
          <Weather />
        </div>
      </main>
    </div>
  );
};

const mapState = (state) => {
  return {
    detailedInfoIsOpen: state.detailedInfoIsOpen,
  };
};

export default connect(mapState)(App);
