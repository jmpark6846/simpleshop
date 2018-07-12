import { ADD_TO_CART } from "../actionTypes";

const INITIAL_STATE = {
  products: [],
  totalPrice: 0,
}

export const cart = (state=INITIAL_STATE, action) => {
  switch(action.type){
    case ADD_TO_CART: 
      return {
        products: [...state.products, action.product] 
      }
    default: 
      return state
  }
}