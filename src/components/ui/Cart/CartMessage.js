import React from 'react'
import PropTypes from 'prop-types'

const CartMessage = ({children}) => {
  return (
    <div className='cart-message'>
      <div className='cart-message-wrapper'>
        <div className='cart-message-body'>
          { children ? children : '장바구니에 추가되었습니다.'}
        </div>
        <i className='chat-start-icon'></i>
      </div>
    </div>
  )
}

CartMessage.propTypes = {
  children: PropTypes.node
}

export default CartMessage
