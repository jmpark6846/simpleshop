import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../../ui-components/Icon/Icon';

class CartMessage extends React.Component{
  render(){
    const { children, show, handleCloseClick } = this.props
    return (
      <div className={ show ? 'cart-message' : 'cart-message hide'} >
        <div className='cart-message-wrapper'>
          <div className='cart-message-body'>
            { children ? children : '장바구니에 추가되었습니다.'}
            <span onClick={handleCloseClick} className='icon'>×</span>
          </div>
          <i className='chat-start-icon'></i>
        </div>
      </div>
    )
  }
  
}

CartMessage.propTypes = {
  children: PropTypes.node,
  show: PropTypes.bool,
  handleCloseClick: PropTypes.func
}

export default CartMessage
