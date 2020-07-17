import moment from "moment";

const getDayOfWeek = (timeValue) => {
  return moment(timeValue * 1000).format("dddd");
};

export default getDayOfWeek;
