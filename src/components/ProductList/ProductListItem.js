import React from 'react'
import PropTypes from 'prop-types'
import ProductItemName from './ProductItemName';
import Image from '../ui-components/Image'
import Price from "../Price";
import { NavLink } from "react-router-dom";
import './ProductListItem.css'

const ProductListItem = ({product}) => {
  return (
    <NavLink to={`/product/${product.id}`}>
      <div className='product-list-item'>
        <Image src={product.img} className='product-img' />
        <ProductItemName name={product.name} /> 
        <Price className='product-price' suffix='원' price={product.price} />
      </div>
    </NavLink>
  )
}

ProductListItem.propTypes = {
  product: PropTypes.object
}

export default ProductListItem