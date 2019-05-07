import pizzaReducer from "./pizza"
import checkoutReducer from "./checkout"
import { createStore, combineReducers } from "redux"

// console.log(pizzaReducer, checkoutReducer);
const rootReducer = combineReducers({
  pizza: pizzaReducer
})

export default createStore(rootReducer, {})
