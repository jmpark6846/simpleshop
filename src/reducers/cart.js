import _ from 'underscore'
import { ADD_TO_CART, DELETE_CART_ITEM, EA_CHANGE } from "../constants/actionTypes";

const INITIAL_STATE = {
  cartItems: {},
  totalPrice: 0,
}

export const cart = (state=INITIAL_STATE, action) => {
  let updatedCartItems;
  
  switch(action.type){
    case ADD_TO_CART:
      // 추가하려는 action.cartItem이 cartItems에 존재하면 EA만 증가시킨다.  
      if( action.cartItem.id in state.cartItems ){
        const addedEA  = state.cartItems[action.cartItem.id].ea + action.cartItem.ea
        const updatedCartItem = { ...action.cartItem, ea: addedEA }
        updatedCartItems = { ...state.cartItems, [action.cartItem.id] : updatedCartItem }
      }else{
        updatedCartItems = { ...state.cartItems, [action.cartItem.id] : action.cartItem }
      }
        
      return {
        cartItems: updatedCartItems,
        totalPrice: getCartTotalPrice(updatedCartItems)
      }

    case DELETE_CART_ITEM:
      updatedCartItems = _.omit(state.cartItems, action.id)
      return {
        cartItems: updatedCartItems,
        totalPrice: getCartTotalPrice(updatedCartItems), 
      }

    case EA_CHANGE:
      updatedCartItems = { ...state.cartItems, [action.id]: { ...state.cartItems[action.id], ea: action.ea } }
      return { 
        ...state, 
        cartItems: updatedCartItems,
        totalPrice: getCartTotalPrice(updatedCartItems)
      }

    default: 
      return state
  }
}

export const getCartTotalPrice = (cartItems) => {
  return Object.values(cartItems).map(item=>item.price*item.ea).reduce(((a, c) => a+c),0)
}