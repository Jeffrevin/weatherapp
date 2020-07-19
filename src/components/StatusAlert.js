import React from "react";

const StatusAlert = (props) => {
  return (
    <section className="statusAlert">
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
