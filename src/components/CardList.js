import React from "react";
import Card from "./Card";

const CardList = () => {
  return (
    <article className="grid grid-cols-4 gap-5 mt-5 py-4">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </article>
  );
};

export default CardList;
