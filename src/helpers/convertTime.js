import moment from "moment";
import {
  HOURS_MINUTES,
  HOURS_ONLY,
  FULL_DATE,
} from "../constants/timeModes";

// const convertTime = (timeValue, date = true) => {
//   return moment(timeValue * 1000).format(
//     `${date ? "M/DD/YYYY h:mm A" : "h:mm A"}`
//   );
// };

const convertTime = (timeValue, mode = FULL_DATE) => {
  const timeObj = moment(timeValue * 1000);
  switch (mode) {
    case FULL_DATE:
      return timeObj.format("M/DD/YYYY h:mm A");
    case HOURS_MINUTES:
      return timeObj.format("h:mm A");
    case HOURS_ONLY:
      return timeObj.format("h A");
    default:
      return timeObj.format("M/DD/YYYY h:mm A");
  }
};

export default convertTime;
