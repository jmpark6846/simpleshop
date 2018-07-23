import React from 'react'
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'

import classNames from 'classnames'
import './Cart.css'
import CartItem from './CartItem';
import Button from '../../ui-components/Button/Button';
import Price from '../../ui-components/Price/Price';
import { doPurchase } from '../../../actions/order';

export const Cart = ({show, cartItems, totalPrice, purchase, history}) => {
  return (
    <div className='cart-wrapper'>
      <Button className='shopping-cart' icon='fas fa-shopping-cart'/>
      <div className='cart-preview-div'>
        <i className='chat-start-icon'></i>
        
          { cartItems && Object.keys(cartItems).length !== 0 ? 
            <div className={classNames('cart', { show })} >
              <div>
                { Object.keys(cartItems).map(id=> <CartItem key={id} cartItem={cartItems[id]} />) }
              </div>
              <div className='cart-item-wrapper'>
                총 금액: <Price className='cart-total-price' price={totalPrice} suffix='원'/>
              </div> 
              <div className='cart-item-wrapper'>
                <Button className='buy' value='구매하기' onClick={()=>purchase(cartItems, history.push)} primary/>
              </div>
            </div>
            :
            <div className={classNames('cart', { show })} >
              <div className='cart-item-wrapper cart-empty-message'>장바구니가 비었습니다.</div>  
            </div>
          }
        
      </div>  
    </div>
  )
}

Cart.propTypes = {
  show: PropTypes.bool,
  cartItems: PropTypes.object,
  totalPrice: PropTypes.number
}

const mapState = ({cart}) => ({
  cartItems: cart.cartItems,
  totalPrice: cart.totalPrice
})

const mapDispatch = (dispatch) => ({
  purchase: (orderItems, push) => dispatch(doPurchase(orderItems, push))
})

export default withRouter(connect(mapState, mapDispatch)(Cart))
