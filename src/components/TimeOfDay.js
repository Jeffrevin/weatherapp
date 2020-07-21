import React from "react";

const TimeOfDay = (props) => {
  return (
    <div className="flex flex-col items-center p-2 flex-1">
      <h2>{props.title}</h2>
      <h3 className="text-4xl">{props.children}</h3>
    </div>
  );
};

export default TimeOfDay;
