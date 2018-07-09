import React from 'react'
import PropTypes from 'prop-types'

const ProductItemName = ({name}) => {
  return (
    <div className='product-name'>{name}</div>
  )
}

ProductItemName.propTypes = {
  name: PropTypes.string
}

export default ProductItemName
