import React from "react";

const Card = (props) => {
  return (
    // <article
    //   className="flex flex-col justify-center bg-gray-200
    // text-gray-800 rounded-sm hover:shadow-md"
    // >
    //   <h3 className="text-center text-3xl text-gray-900">
    //     TEMP&deg;
    //   </h3>
    //   <img
    //     className="w-full"
    //     src="https://picsum.photos/200"
    //     alt=""
    //   />
    //   <section className="p-2">
    //     <p>62</p>
    //     <p>69</p>
    //   </section>
    // </article>
    <article className="p-5 my-5 rounded text-center text-white bg-gray-600 flex flex-col items-center shadow hover:shadow-md">
      <header className="flex flex-col items-center">
        <section className="flex flex-row items-center">
          <i className="material-icons text-red-600 text-4xl">
            place
          </i>
          <h2 className="text-md font-semibold">
            {props.searchResult.name},{" "}
            {props.searchResult.sys.country}
          </h2>
        </section>
        <h4 className="text-sm text-gray-100 font-thin">
          As of {props.timestamp}
        </h4>
      </header>
      <section className="flex flex-col items-center">
        <h2 className="text-5xl font-semibold">
          {Math.round(props.searchResult.main.temp)}&deg;F
        </h2>
        <p className="text-lg font-thin text-gray-100">
          {Math.round(props.searchResult.main.temp_max)}&deg;F/
          {Math.round(props.searchResult.main.temp_min)}&deg;F
        </p>
        <img
          src={`http://openweathermap.org/img/wn/${props.searchResult.weather[0].icon}@2x.png`}
          alt={props.searchResult.weather[0].description}
        />
        <p className="font-light text-gray-100">
          Feels like {Math.round(props.searchResult.main.feels_like)}
          &deg;F
        </p>
        <h3 className="text-3xl">
          {props.searchResult.weather[0].main}
        </h3>
      </section>
    </article>
  );
};

export default Card;
