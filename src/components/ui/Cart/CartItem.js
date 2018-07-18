import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import classNames from 'classnames'
import NumberSelector from '../../ui-components/NumberSelector/NumberSelector'
import Price from "../../ui-components/Price/Price";
import Icon from '../../ui-components/Icon/Icon'
import { doDeleteCartItem, doChangeEA } from '../../../actions/cart';
import { cart } from '../../../reducers/cart';

export const CartItem = ({className, cartItem, children, deleteCartItem, changeEA}) => {
  return (
    <div className={classNames('cart-item', className)}>
      { children ? 
        children
        :
        <React.Fragment>
          <div className='image' style={{ backgroundImage: `url(${cartItem.img})` }}></div>      
          <div className='item-info'>
            <div>{ cartItem.name.length > 20 ? `${cartItem.name.substr(0,20)}...` : cartItem.name }</div>
            <div><Price price={ cartItem.price } suffix='원' /></div>
            <NumberSelector number={cartItem.ea} onChange={(ea)=>changeEA(cartItem.id, ea)} />
          </div>
          <div className='delete'>
            <Icon icon='far fa-trash-alt' onClick={()=>deleteCartItem(cartItem.id)} />
          </div>
        </React.Fragment>
      }
    </div>
  )
}

CartItem.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  changeEA: PropTypes.func,
  deleteCartItem: PropTypes.func,
  cartItem: PropTypes.object
}

const mapDispatch = (dispatch) => ({
  changeEA: (id, ea) => dispatch(doChangeEA(id, ea)),
  deleteCartItem: (id) => dispatch(doDeleteCartItem(id))
})
export default connect(undefined, mapDispatch)(CartItem)
