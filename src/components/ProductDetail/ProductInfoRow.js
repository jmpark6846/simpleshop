import React from 'react'
import PropTypes from 'prop-types'
import './ProductInfoRow.css'

const ProductInfoRow = ({children}) => {
  return (
    <div className='product-info-row'>
      {children}
    </div>
  )
}

ProductInfoRow.propTypes = {
  children: PropTypes.node
}

export default ProductInfoRow
