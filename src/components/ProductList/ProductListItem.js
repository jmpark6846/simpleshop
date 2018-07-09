import React from 'react'
import PropTypes from 'prop-types'
import './ProductListItem.css'
import ProductItemName from './ProductItemName';
import Image from '../ui-components/Image'

const ProductListItem = ({product}) => {
  return (
    <div className='product-list-item'>
      <Image img={product.img} className='product-img' />
      <ProductItemName name={product.name} /> 
      <Price className='product-price' suffix='원' price={product.price} />
    </div>
  )
}

ProductListItem.propTypes = {
  product: PropTypes.object
}

export default ProductListItem