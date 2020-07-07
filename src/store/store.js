import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import weatherReducer from "./weather/weatherReducer";

const store = createStore(weatherReducer, applyMiddleware(thunk));

export default store;
