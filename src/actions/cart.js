import { ADD_TO_CART, DELETE_CART_ITEM, EA_CHANGE } from "../constants/actionTypes";

export const doAddToCart = (cartItem) => ({
  type: ADD_TO_CART,
  cartItem
})

export const doDeleteCartItem = (id) => ({
  type: DELETE_CART_ITEM,
  id
})

export const doChangeEA = (id, ea) => ({
  type: EA_CHANGE,
  id,
  ea
})