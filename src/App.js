import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";
import Form from "./components/Form";
import CardList from "./components/CardList";
import CurrentWeather from "./components/CurrentWeather";
import DetailedInfo from "./components/DetailedInfo";

function App(props) {
  const fauxBody = useRef(null);
  const [bodyHeight, setBodyHeight] = useState(937);
  useEffect(() => {
    setBodyHeight(document.body.clientHeight);
  }, [props.detailedInfoIsOpen]);
  return (
    <div
      className={`bg-gray-900 min-h-full`}
      // style={{ height: `${bodyHeight}px` }}
    >
      <header className="bg-indigo-200 text-center text-6xl h-40">
        Weather App
      </header>
      <main className="container mx-auto ">
        <div className="mx-4 -my-12 pb-3" ref={fauxBody}>
          <Form />
          <CurrentWeather />
          <DetailedInfo />

          {/* <CardList />  */}
        </div>
      </main>
    </div>
  );
}

const mapState = (state) => {
  return {
    detailedInfoIsOpen: state.detailedInfoIsOpen,
  };
};

export default connect(mapState)(App);
