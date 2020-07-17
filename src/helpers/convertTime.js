import moment from "moment";
const convertTime = (timeValue, date = true) => {
  return moment(timeValue * 1000).format(
    `${date ? "M/DD/YYYY h:mm A" : "h:mm A"}`
  );
};

export default convertTime;
