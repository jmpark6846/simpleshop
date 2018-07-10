import React from 'react'
import PropTypes from 'prop-types'

const Price = ({className, price, prefix, suffix}) => {
  const formattedPrice = String(price).split('').reverse().map((c,i)=>(i+1)%3 === 0 && i !== String(price).length-1 ? ','+c : c).reverse().join('')

  return (
    <span className={className}>{prefix}{formattedPrice}{suffix}</span>
  )
}

Price.propTypes = {
  price: PropTypes.number,
  prefix: PropTypes.string,
  suffix: PropTypes.string,
  className: PropTypes.string,
}

export default Price
