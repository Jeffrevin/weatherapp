import React from "react";
import { motion } from "framer-motion";

const variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const StatusAlert = (props) => {
  return (
    <motion.section
      className="statusAlert"
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <i
        className={`material-icons text-6xl ${
          props.iconColor || "text-gray-400 "
        }`}
      >
        {props.icon}
      </i>
      <h2 className="text-3xl">{props.text}</h2>
    </motion.section>
  );
};

export default StatusAlert;
