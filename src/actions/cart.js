import { ADD_TO_CART, TOGGLE_CART, DELETE_CART_ITEM, LOAD_NEW_PAGE } from "../constants/actionTypes";

export const doAddToCart = (cartItem) => ({
  type: ADD_TO_CART,
  cartItem
})

export const doToggleCart = () => ({
  type: TOGGLE_CART,
})

export const doDeleteCartItem = (id) => ({
  type: DELETE_CART_ITEM,
  id
})

export const doLoadNewPage = () => ({
  type: LOAD_NEW_PAGE,
})