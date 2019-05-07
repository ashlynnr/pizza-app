import {
  GET_PIZZA,
  SELECT_CRUST,
  SELECT_SAUCE,
  SELECT_CHEESE,
  ADD_TOPPING,
  REMOVE_TOPPING,
  DESELECT_ALL
} from "./types"

const initalState = {
  crust: "pan",
  sauce: "marinara",
  cheese: "mozzarella",
  toppings: []
}

const pizzaReducer = (state = initalState, action) => {
  switch (action.type) {
    case SELECT_CRUST:
      return {
        ...state,
        crust: action.payload
      }
    case SELECT_SAUCE:
      return {
        ...state,
        sauce: action.payload
      }
    case SELECT_CHEESE:
      return {
        ...state,
        cheese: action.payload
      }
    case ADD_TOPPING:
      return {
        ...state,
        toppings: [...state.toppings, action.payload]
      }
    case REMOVE_TOPPING:
      return {
        ...state,
        toppings: state.toppings.filter(topping => topping !== action.payload)
      }
    case DESELECT_ALL:
      return {
        crust: "pan",
        sauce: "marinara",
        cheese: "mozzarella",
        toppings: []
      }
    case GET_PIZZA:
      return state

    default:
      return state
  }
}

export default pizzaReducer
