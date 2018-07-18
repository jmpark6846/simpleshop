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
  let updatedCartItems = {}

  switch(action.type){
    case ADD_TO_CART:
      updatedCartItems = { ...state.cartItems, [action.cartItem.id] : action.cartItem }
      // 이미 추가된 상품은 더 추가하지 않고 에러 메세지 출력한다.
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
          show: true,
          cartItems: updatedCartItems,
          totalPrice: getCartTotalPrice(updatedCartItems)
        }

    case DELETE_CART_ITEM:
      updatedCartItems = _.omit(state.cartItems, action.id)
      return {
        ...state,
        error:false,
        errorMsg: '',
        cartItems: updatedCartItems,
        totalPrice: getCartTotalPrice(updatedCartItems), 
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