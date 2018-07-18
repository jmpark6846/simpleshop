import _ from 'underscore'

import { ADD_TO_CART, TOGGLE_CART, DELETE_CART_ITEM, LOAD_NEW_PAGE, EA_CHANGE } from "../constants/actionTypes";
const INITIAL_STATE = {
  cartItems: {},
  totalPrice: 0,
  show: false,
  error: false,
  errorMsg: '',
}

export const cart = (state=INITIAL_STATE, action) => {
  switch(action.type){
    case ADD_TO_CART:
      return action.cartItem.id in state.cartItems ? 
        { 
          ...state,
          show: true,
          error: true,
          errorMsg: '장바구니에 이미 추가된 상품입니다.'
        }
        : 
        {
          error:false,
          errorMsg:'',
          cartItems: { ...state.cartItems, [action.cartItem.id] : action.cartItem },
          show: true,
          totalPrice: Object.values(state.cartItems).map(item=>item.price*item.ea).reduce(((a, c) => a+c),0) + action.cartItem.price*action.cartItem.ea
        }
    case DELETE_CART_ITEM:
      const cartItems = _.omit(state.cartItems, action.id)
      const totalPrice = Object.values(cartItems).map(item=>item.price*item.ea).reduce(((a, c) => a+c),0)
      return {
        ...state,
        error:false,
        errorMsg: '',
        cartItems,
        totalPrice, 
      }
    case TOGGLE_CART:
      return {
        ...state,
        show: !state.show
      }
    case LOAD_NEW_PAGE:
      return {
        ...state,
        show:false,
        error: INITIAL_STATE.error,
        errorMsg: INITIAL_STATE.errorMsg
      }
    case EA_CHANGE:
      const { id, ea } = action
      return { ...state, cartItems: { ...state.cartItems, [id]: { ...state.cartItems[id], ea }}}
    default: 
      return state
  }
}