import React from 'react'
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import classNames from 'classnames'
import './Cart.css'
import CartItem from './CartItem';

import Icon from '../../ui-components/Icon/Icon';
import Button from '../../ui-components/Button/Button';
import Price from '../../ui-components/Price/Price';

export const Cart = ({cartItems, show, error, errorMsg, totalPrice}) => {
  return (
      <div className={classNames('cart', { show } )}>
        { cartItems &&Object.keys(cartItems).length !== 0 ? 
          Object.keys(cartItems).map(id=> <CartItem key={id} cartItem={cartItems[id]} />)          
          :
          <div className='cart-item-wrapper cart-empty-message'>장바구니가 비었습니다.</div> 
        }
        { error && 
          <div className='cart-item-wrapper error'>
            <Icon icon='fas fa-info-circle' />
            {errorMsg}
          </div> }
        <div className='cart-item-wrapper'>
          총 금액: <Price className='cart-total-price' price={totalPrice} suffix='원'/>
        </div> 
        <div className='cart-item-wrapper'>
          <Button className='buy' value='구매하기' primary/>
        </div>
      </div>
  )
}

Cart.propTypes = {
  cartItems: PropTypes.object,
  show: PropTypes.bool,
  error: PropTypes.bool,
  errorMsg: PropTypes.string,
  totalPrice: PropTypes.number
}

const mapState = ({cart}) => ({
  cartItems: cart.cartItems,
  show: cart.show,
  error: cart.error,
  errorMsg: cart.errorMsg,
  totalPrice: cart.totalPrice
})

export default connect(mapState)(Cart)
