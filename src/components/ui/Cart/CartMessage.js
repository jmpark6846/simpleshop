import React from 'react'
import PropTypes from 'prop-types'

const TIMER_SECONDS = 2
class CartMessage extends React.Component{
  constructor(props){
    super(props)

    this.state= { visible: false, showCount: TIMER_SECONDS } 
  }

  timer = () => {
    this.setState({ showCount: this.state.showCount - 1 })
    if(this.state.showCount < 1){
      this.setState({ visible: false })
      this.props.onMessageDismiss()
      clearInterval(this.delay)
    }
  }

  componentDidUpdate = (prevProps, prevState) => {
    if(prevProps.show !== this.props.show && this.props.show === true){
      this.setState({ visible: true, showCount: TIMER_SECONDS })
      this.delay = setInterval(this.timer, 1000)
    }
  }
  
  render(){
    const { children, show, onMessageDismiss } = this.props
    return (
      <div className={ show ? 'cart-message' : 'cart-message hide'} >
        <div className='cart-message-wrapper'>
          <div className='cart-message-body'>
            { children ? children : '장바구니에 추가되었습니다.'}
            <span onClick={onMessageDismiss} className='icon'>×</span>
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
  onMessageDismiss: PropTypes.func
}

export default CartMessage
