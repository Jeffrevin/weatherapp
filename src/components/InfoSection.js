import React from "react";

const InfoSection = (props) => {
  return (
    <div className="flex flex-row justify-between items-center py-2 px-1 h-full">
      <div className="flex flex-row items-center">
        {props.icon && (
          <i className={`material-icons mr-2 ${props.iconColor}`}>
            {props.icon}
          </i>
        )}
        <p className="text-lg">{props.infoType}</p>
      </div>
      <p className="text-lg text-right">{props.infoValue}</p>
    </div>
  );
};

export default InfoSection;
