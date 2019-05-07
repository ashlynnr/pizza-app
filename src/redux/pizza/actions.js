import {
  GET_PIZZA,
  SELECT_CRUST,
  SELECT_SAUCE,
  SELECT_CHEESE,
  ADD_TOPPING,
  REMOVE_TOPPING,
  DESELECT_ALL
} from "./types"

export const getPizza = () => ({
  type: GET_PIZZA
})

export const selectCrust = crust => ({
  type: SELECT_CRUST,
  payload: crust
})

export const selectSauce = sauce => ({
  type: SELECT_SAUCE,
  payload: sauce
})

export const selectCheese = cheese => ({
  type: SELECT_CHEESE,
  payload: cheese
})

export const addTopping = topping => ({
  type: ADD_TOPPING,
  payload: topping
})

export const removeTopping = topping => ({
  type: REMOVE_TOPPING,
  payload: topping
})

export const deselectAll = () => ({
  type: DESELECT_ALL
})
