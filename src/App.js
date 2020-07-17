import React from "react";
import { connect } from "react-redux";
import Form from "./components/Form";
import CardList from "./components/CardList";
import CurrentWeather from "./components/CurrentWeather";
import DetailedInfo from "./components/DetailedInfo";
import Weather from "./components/Weather";

const App = () => {
  return (
    <div className={`bg-gray-900 min-h-full`}>
      <header className="bg-indigo-200 text-center text-6xl h-40">
        Weather App
      </header>
      <main className="container mx-auto">
        {/* <div className="mx-4 -my-12 pb-3">
          <Form />
          <CurrentWeather />
          <DetailedInfo />
        </div> */}
        <div className="mx-4 -my-12 pb-3">
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
