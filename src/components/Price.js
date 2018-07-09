import React from 'react'
import PropTypes from 'prop-types'

const Price = ({price, prefix, suffix}) => {
  return (
    <div className='price'>
      {price}
    </div>
  )
}

Price.propTypes = {

}

export default Price
