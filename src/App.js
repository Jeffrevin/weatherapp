import React from "react";
import Form from "./components/Form";
import Weather from "./components/Weather";

const App = () => {
  return (
    <>
      <div>
        <header className="bg-indigo-200 text-center text-6xl h-40 bgImg bg-fixed">
          Weather App
        </header>
        <main className="container mx-auto">
          <div className="w-full px-2 -my-12 pb-3 flex flex-col items-center">
            <Form />
            <Weather />
            {/* <div className="grid grid-rows-4 gap-5 grid-flow-col">
              <img
                src="http://placekitten.com/400/400"
                className="bg-blue-500 row-span-1"
              />
              <img
                src="http://placekitten.com/400/400"
                className="bg-blue-500 row-span-2"
              />
              <img
                src="http://placekitten.com/400/400"
                className="bg-blue-500 row-span-1"
              />
              <img
                src="http://placekitten.com/400/400"
                className="bg-blue-500 row-span-3"
              />
            </div> */}
          </div>
        </main>
      </div>
      <div className="bg bg-gray-900 top-0 left-0 right-0 bottom-0 fixed w-full h-full"></div>
    </>
  );
};

export default App;
