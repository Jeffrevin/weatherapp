import React from "react";

const TimeOfDay = (props) => {
  return (
    <div className="flex flex-col items-center w-full">
      <h2>{props.title}</h2>
      <h3 className="text-xl">{props.children}</h3>
    </div>
  );
};

export default TimeOfDay;
