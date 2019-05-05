import { ADJUST_PRICE } from "./types";

export const adjustPrice = price => ({
  type: ADJUST_PRICE,
  payload: price
});
