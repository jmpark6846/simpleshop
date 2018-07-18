import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import classNames from 'classnames'
import NumberSelector from '../../ui-components/NumberSelector/NumberSelector'
import Price from "../../ui-components/Price/Price";
import { doDeleteCartItem } from '../../../actions/cart';

export const CartItem = ({className, cartItem, children, deleteCartItem}) => {
  return (
    <div className={classNames('cart-item', className)}>
      { children ? 
        children
        :
        <React.Fragment>
          <div className='image' style={{ backgroundImage: `url(${cartItem.img})` }}></div>      
          <div className='item-info'>
            <div>{ cartItem.name }</div>
            <div><Price price={ cartItem.price } suffix='원' /></div>
            <NumberSelector number={cartItem.ea} onChange={(ea)=>this.changeEA(ea)} />
            <div><Price price={ cartItem.price*cartItem.ea } suffix='원' /></div>
          </div>
          <div className='delete' onClick={()=>deleteCartItem(cartItem.id)}>삭제</div>
        </React.Fragment>
      }
    </div>
  )
}

CartItem.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  deleteCartItem: PropTypes.func,
  cartItem: PropTypes.object
}

const mapDispatch = (dispatch) => ({
  changeEA: (ea) => dispatch(doChangeEA(ea)),
  deleteCartItem: (id) => dispatch(doDeleteCartItem(id))
})
export default connect(undefined, mapDispatch)(CartItem)
