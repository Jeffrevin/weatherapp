import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./weather/reducers/rootReducer";

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
