import { ADD_TO_CART } from "../actionTypes";

export const doAddToCart = (product) => ({
  type: ADD_TO_CART,
  product
})