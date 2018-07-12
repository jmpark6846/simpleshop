import React from 'react'
import PageLayout from './PageLayout';
import { connect } from 'react-redux'

import { Col, Row, Container } from '../components/ui-components/grid';
import ProductInfoSection from '../components/ProductDetail/ProductInfoSection';
import Slider from '../components/ui/Slider/Slider';
import SectionWrapper from '../components/ProductDetail/SectionWrapper';
import './ProductDetailPage.css'
import { doAddToCart } from '../actions/cart';
import ProductInfoRow from '../components/ProductDetail/ProductInfoRow';
import Button from '../components/ui/Button';

const product = { 
  id:0,
  name: 'Adventurist Daypack - Pine', 
  price: 58000, 
  imgs: ['/src/asset/img/1.jpeg', '/src/asset/img/2.jpg', '/src/asset/img/3.jpg'] ,
  rating: 3.75,
  reviewCount: 4,
  reviews: [
    { title: '좋아요', content:'좋아요좋아요좋아요', ratings: 4 }, 
    { title: '좋아요', content:'좋아요좋아요좋아요', ratings: 3 }, 
    { title: '좋아요', content:'좋아요좋아요좋아요', ratings: 3 }, 
    { title: '좋아요', content:'좋아요좋아요좋아요', ratings: 5 }
  ]
}

class ProductDetailPage extends React.Component{
  constructor(props){
    super(props)

    this.state = { 
      ea: 1,
      shippingRate: 3000,
      shippingRateFreeLimit: 30000,
      totalPrice: product.price
    }
  }

  setEA = (ea) => {
    const totalPrice = ea * product.price
    this.setState({ 
      totalPrice,
      ea
    })
  }

  render(){
    return (
      <PageLayout page='product-detail-page'>
        <Container>
          <Row>
            <Col desktop={6}>
              <SectionWrapper>
                <Slider imgs={product.imgs} />
              </SectionWrapper>
            </Col>
            <Col desktop={6}>
              <ProductInfoSection setEA={this.setEA} {...this.state} product={product} />
              <ProductInfoRow>
                <Button value='장바구니 담기'/>
                <Button value='구매하기' primary />
              </ProductInfoRow>
            </Col>
          </Row>
        </Container>
      </PageLayout>
    )
  }
}

ProductDetailPage.propTypes = {

}

const mapDispatch = (dispatch) => ({
  addToCart: (product) => dispatch(doAddToCart(product))
})

export default connect(undefined, mapDispatch)(ProductDetailPage)
