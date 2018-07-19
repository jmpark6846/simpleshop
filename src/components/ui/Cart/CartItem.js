import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { NavLink } from "react-router-dom";
import NumberSelector from '../../ui-components/NumberSelector/NumberSelector'
import Price from "../../ui-components/Price/Price";
import Icon from '../../ui-components/Icon/Icon'
import { doDeleteCartItem, doChangeEA } from '../../../actions/cart';

export const CartItem = ({cartItem, deleteCartItem, changeEA}) => {
  return (
    <div className='cart-item'>
      <div className='image' style={{ backgroundImage: `url(${cartItem.img})` }}></div>      
      <div className='item-info'>
        <div><NavLink to={'/product/'+cartItem.id} >{ cartItem.name.length > 20 ? `${cartItem.name.substr(0,20)}...` : cartItem.name }</NavLink></div>
        <div><Price price={ cartItem.price } suffix='원' /></div>
        <NumberSelector number={cartItem.ea} onChange={(ea)=>changeEA(cartItem.id, ea)} />
      </div>
      <div className='delete'>
        <Icon icon='far fa-trash-alt' onClick={()=>deleteCartItem(cartItem.id)} />
      </div>
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
