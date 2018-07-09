import React from 'react'
import PropTypes from 'prop-types'

const ProductItemImg = ({img}) => {
  return (
    <img src={img} className='product-img'/>
  )
}

ProductItemImg.propTypes = {
  img: PropTypes.string,
}

export default ProductItemImg
