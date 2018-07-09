import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Price = ({className, price, prefix, suffix}) => {
  const formattedPrice = String(price).split('').reverse().map((c,i)=>(i+1)%3 === 0 && i !== String(price).length-1 ? ','+c : c).reverse().join('')

  return (
    <div className={className}>{prefix}{formattedPrice}{suffix}</div>
  )
}

Price.propTypes = {
  price: PropTypes.number,
  prefix: PropTypes.String,
  suffix: PropTypes.String,
}

export default Price
