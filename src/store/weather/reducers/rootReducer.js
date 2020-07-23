import { combineReducers } from "redux";
import weatherData from "./weatherDataReducer";
import infoStatus from "./infoStatusReducer";

const rootReducer = combineReducers({ weatherData, infoStatus });

export default rootReducer;
