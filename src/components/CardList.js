import React from "react";
import Card from "./Card";

const CardList = () => {
  return (
    <section className="">
      <header>
        <h2 className="text-center text-white text-3xl">
          Result Information
        </h2>
      </header>
      <article className="grid grid-cols-4 gap-5 mt-5 py-4">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </article>
    </section>
  );
};

export default CardList;
