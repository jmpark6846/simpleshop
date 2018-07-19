import React from 'react'
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import classNames from 'classnames'
import './Cart.css'
import CartItem from './CartItem';

import Icon from '../../ui-components/Icon/Icon';
import Button from '../../ui-components/Button/Button';
import Price from '../../ui-components/Price/Price';

export const Cart = ({show, cartItems, totalPrice}) => {
  return (
    <div className='cart-wrapper'>
      <Button className='shopping-cart' icon='fas fa-shopping-cart'/>
      <div className='cart-preview-div'>
        <div className={classNames('cart', { show })} >
          { cartItems &&Object.keys(cartItems).length !== 0 ? 
            Object.keys(cartItems).map(id=> <CartItem key={id} cartItem={cartItems[id]} />)          
            :
            <div className='cart-item-wrapper cart-empty-message'>장바구니가 비었습니다.</div> 
          }
        
          <div className='cart-item-wrapper'>
            총 금액: <Price className='cart-total-price' price={totalPrice} suffix='원'/>
          </div> 
          <div className='cart-item-wrapper'>
            <Button className='buy' value='구매하기' primary/>
          </div>
        </div>
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

export default connect(mapState)(Cart)
