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
        { Object.keys(cartItems).length !== 0 ? 
          Object.keys(cartItems).map(id=> <CartItem key={id} cartItem={cartItems[id]} />)          
          :
          <div className='cart-item'>장바구니가 비었습니다.</div> 
        }
        { error && 
          <CartItem className='error'>
            <Icon icon='fas fa-info-circle' />
            {errorMsg}
          </CartItem> }
        <CartItem>
          총 금액: <Price price={totalPrice} suffix='원'/>
        </CartItem> 
        <CartItem>
          <Button className='buy' value='구매하기' primary/>
        </CartItem>
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
