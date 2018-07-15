import React from 'react'
import PropTypes from 'prop-types'

const CartHeader = ({value}) => {
  return (
    <div className='cart-header'>
      {value}
    </div>
  )
}

CartHeader.propTypes = {
  value: PropTypes.string
}

export default CartHeader
