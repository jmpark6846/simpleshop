import { ORDER_ADD } from "../constants/actionTypes";
import { getCartTotalPrice } from "./cart";

const initialState = {
  orderItems: {}, // { [product id] : item object }
  totalPrice: 0
}

export const order = (state=initialState, action) => {
  switch(action.type){
    case ORDER_ADD:
      const updatedOrderItems = updateOrderWithNewItems(state.orderItems, action.orderItems)
      const updatedTotalPrice = getCartTotalPrice(updatedOrderItems)
      return { orderItems: updatedOrderItems, totalPrice: updatedTotalPrice }
    default:
      return state
  }
}

export const updateOrderWithNewItems = (orderItems, newItems) => {
  const orderItemIds = Object.keys(orderItems)
  const newItemIds = Object.keys(newItems)
  let updatedOrderItems = { ...orderItems }

  newItemIds.forEach(newItemId => {
    if( newItemId in orderItemIds ){
      updatedOrderItems[newItemId].ea += newItems[newItemId].ea
    }else{
      updatedOrderItems[newItemId] = newItems[newItemId]
    }
  })

  return updatedOrderItems
}

// { 0: { ea : 1 } }

// { 0: { ea : 5 }, 2: { ea : 10 } }