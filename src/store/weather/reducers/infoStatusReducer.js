import {
  INFO_OPENED,
  INFO_CLOSED,
} from "../../../constants/weatherTypes";

const initialState = { detailedInfoIsOpen: false };

const infoStatusReducer = (state = initialState, action) => {
  switch (action.type) {
    case INFO_OPENED:
      return {
        ...state,
        detailedInfoIsOpen: true,
      };
    case INFO_CLOSED:
      return {
        ...state,
        detailedInfoIsOpen: false,
      };
    default:
      return state;
  }
};

export default infoStatusReducer;
