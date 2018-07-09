import React from 'react'
import PropTypes from 'prop-types'
import './ProductListItem.css'
import ProductItemName from './ProductItemName';
import ProductItemPrice from './ProductItemPrice';
import ProductItemImg from './ProductItemImg';

const ProductListItem = ({product}) => {
  return (
    <div className='product-list-item'>
      <ProductItemImg img={product.img} />
      <ProductItemName name={product.name} /> 
      <ProductItemPrice suffix='원' price={product.price} />
    </div>
  )
}

ProductListItem.propTypes = {
  product: PropTypes.object
}

export default ProductListItem