import React from 'react'
import PropTypes from 'prop-types'

const ProductItemPrice = ({price, suffix}) => {
  console.log(String(price).length)
  const formattedPrice = String(price).split('').reverse().map((c,i)=>(i+1)%3 === 0 && i !== String(price).length-1 ? ','+c : c).reverse().join('')
  return (
    <div className='product-price'>{formattedPrice}{suffix}</div>
  )
}

ProductItemPrice.propTypes = {
  price: PropTypes.number
}

export default ProductItemPrice
