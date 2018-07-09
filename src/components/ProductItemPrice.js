import React from 'react'
import PropTypes from 'prop-types'

const ProductItemPrice = ({price}) => {
  return (
    <div className='product-price'>{price}</div>
  )
}

ProductItemPrice.propTypes = {
  price: PropTypes.number
}

export default ProductItemPrice
