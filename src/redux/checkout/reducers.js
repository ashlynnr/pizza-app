import * as types from "./types";

const initialState = {
  price: 15.0
};

const checkoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADJUST_PRICE:
      return {
        ...state,
        price: action.payload
      };
    default:
      return state;
  }
};

export default checkoutReducer;
