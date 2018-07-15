import React from 'react'
import PropTypes from 'prop-types'
import ProductItemName from './ProductItemName';
import { connect } from "react-redux";
import Image from '../ui-components/Image'
import Price from "../ui-components/Price/Price";
import { NavLink } from "react-router-dom";
import './ProductListItem.css'
import Button from '../ui-components/Button/Button';
import { doAddToCart } from '../../actions/cart';

const ProductListItem = ({product, addToCart}) => {
  const cartItem = {id: product.id, name: product.name, price: product.price, img: product.imgs[0], ea: 1}
  return (
    <div className='product-list-item'>
      <NavLink to={`/product/${product.id}`}>
        <div className='product-img' style={{backgroundImage: `url(${product.imgs[0]})`}}></div>
        <ProductItemName name={product.name} /> 
        <Price className='product-price' suffix='원' price={product.price} />
      </NavLink>
      <Button icon='fas fa-shopping-cart' className='shortcut-cart' onClick={()=>addToCart(cartItem)}/>
    </div>
  )
}

ProductListItem.propTypes = {
  product: PropTypes.object,
  addToCart: PropTypes.func,
}

const mapDispatch = (dispatch) => ({
  addToCart: (cartItem) => dispatch(doAddToCart(cartItem))
})

export default connect(undefined,mapDispatch)(ProductListItem)