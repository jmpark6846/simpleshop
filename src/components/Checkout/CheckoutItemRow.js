import React from 'react'
import PropTypes from 'prop-types'

const CheckoutItemRow = ({checkoutItem}) => {
  return (
    <div className='checkout-item-row'>
      <div className='checkout-item-image' style={{ backgroundImage: `url(${checkoutItem.img})` }}></div>
      <div className='item-info'>
        <div><NavLink to={'/product/'+checkoutItem.id} >{ checkoutItem.name.length > 40 ? `${checkoutItem.name.substr(0,40)}...` : checkoutItem.name }</NavLink></div>
        <div><Price price={ checkoutItem.price } suffix='원' /></div>
        <NumberSelector number={checkoutItem.ea} onChange={(ea)=>changeEA(checkoutItem.id, ea)} />
      </div>
    </div>
  )
}

CheckoutItemRow.propTypes = {
  checkoutItem: PropTypes.object
}

export default CheckoutItemRow
