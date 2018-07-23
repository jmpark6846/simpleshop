import { PLACE_ORDER } from "../constants/actionTypes";
import { getCartTotalPrice } from "./cart";

const initialState = {
  orderItems: {}, // { [product id] : item object }
  totalPrice: 0
}

export const order = (state=initialState, action) => {
  switch(action.type){
    case PLACE_ORDER:
      return { orderItems: action.orderItems, totalPrice: getCartTotalPrice(action.orderItems) }
    default:
      return state
  }
}