import React from 'react'
import PropTypes from 'prop-types'

const Price = ({price, prefix, suffix}) => {
  return (
    <div className='price'>
      {result}
    </div>
  )
}

Price.propTypes = {
  price: PropTypes.number,
  prefix: PropTypes.String,
  suffix: PropTypes.String,
}

export default Price
