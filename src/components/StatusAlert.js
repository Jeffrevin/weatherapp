import React from "react";

const StatusAlert = (props) => {
  return (
    <section className="my-5 text-white text-center">
      <i
        className={`material-icons text-6xl ${
          props.iconColor || "text-gray-400 "
        }`}
      >
        {props.icon}
      </i>
      <h2 className="text-3xl">{props.text}</h2>
    </section>
  );
};

export default StatusAlert;
