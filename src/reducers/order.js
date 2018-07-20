import { ORDER_ADD } from "../constants/actionTypes";
import { getCartTotalPrice } from "./cart";

const initialState = {
  orderItems: {}, // { [product id] : item object }
  totalPrice: 0
}

export const order = (state=initialState, action) => {
  switch(action.type){
    case ORDER_ADD:
      return { orderItems: action.orderItems, totalPrice: getCartTotalPrice(action.orderItems) }
    default:
      return state
  }
}

// export const updateOrderWithNewItems = (orderItems, newItems) => {
//   const orderItemIds = Object.keys(orderItems)
//   const newItemIds = Object.keys(newItems)
//   let updatedOrderItems = { ...orderItems }

//   newItemIds.forEach(newItemId => {
//     if( newItemId in orderItemIds ){
//       updatedOrderItems[newItemId].ea += newItems[newItemId].ea
//     }else{
//       updatedOrderItems[newItemId] = newItems[newItemId]
//     }
//   })

//   return updatedOrderItems
// }