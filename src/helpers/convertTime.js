import moment from "moment";
const convertTime = (timeValue, date = true) => {
  // const str = date === true ? "M/DD/YYYY h:mm A" : "h:mm A";
  // if (date) {
  //   return moment(timeValue * 1000).format("M/DD/YYYY h:mm A");
  // }
  // return moment(timeValue * 1000).format("h:mm A");
  return moment(timeValue * 1000).format(
    `${date ? "M/DD/YYYY h:mm A" : "h:mm A"}`
  );
};

export default convertTime;
