import React from 'react'
import PropTypes from 'prop-types'
import Header from '../ui/Header';
import Rating from '../Rating';
import Price from '../Price';
import Divider from '../ui-components/Divider/Divider';
import ProductInfoRow from './ProductInfoRow';
import Button from '../ui/Button';
import SectionWrapper from './SectionWrapper'
import NumberSelector from '../NumberSelector';

const ProductInfoSection = ({ea, product, shippingRate, shippingRateFreeLimit, totalPrice, setEA}) => {
  return (
    <SectionWrapper>
      <Header className='product-name' header={product.name} />
      <Rating rating={product.rating} reviewCount={product.reviewCount} />
      <Price className='price' suffix='원' price={product.price} />

      <Divider />
      <ProductInfoRow>
        <span>배송비 (<Price className='ea' suffix='원' price={shippingRateFreeLimit}/> 이상 구매 시 무료) </span>
        <Price className='ea' suffix='원' price={shippingRate} />
      </ProductInfoRow>
      <ProductInfoRow>
        <NumberSelector onChange={setEA} number={ea}/>
        <Price className='ea' suffix='원' price={product.price*ea} />
      </ProductInfoRow>
      <Divider />
      <ProductInfoRow>
        총 금액
        <Price className='price' suffix='원' price={totalPrice} />
      </ProductInfoRow>
      <ProductInfoRow>
        <Button value='장바구니 담기'/>
        <Button value='구매하기' primary />
      </ProductInfoRow>
    </SectionWrapper>
  )
}

ProductInfoSection.propTypes = {

}

export default ProductInfoSection
