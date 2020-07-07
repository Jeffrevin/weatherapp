import React from "react";

const Card = (props) => {
  return (
    <article className="flex flex-col justify-center bg-gray-200 text-gray-800 rounded-sm">
      <h3 className="text-center text-3xl text-gray-900">
        TEMP&deg;
      </h3>
      <img
        className="w-full"
        src="https://picsum.photos/200"
        alt=""
      />
      <section className="p-2">
        <p>62</p>
        <p>69</p>
      </section>
    </article>
  );
};

export default Card;
