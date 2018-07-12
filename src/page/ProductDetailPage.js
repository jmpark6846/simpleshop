import React from 'react'
import PropTypes from 'prop-types'
import PageLayout from './PageLayout';
import Image from '../components/ui-components/Image';
import { Col, Row, Container } from '../components/ui-components/grid';

import Header from '../components/ui/Header';
import Price from '../components/Price';
import './ProductDetailPage.css'
import Rating from '../components/Rating';
import NumberSelector from '../components/NumberSelector';
import Divider from '../components/ui-components/Divider/Divider'
import Button from '../components/ui/Button'
import TabGroup from '../components/ui/TabGroup';
import styled from 'styled-components';
import ProductInfoRow from '../components/ProductDetail/ProductInfoRow';
import Tab from '../components/ui/Tab';
import ProductInfoSection from '../components/ProductDetail/ProductInfoSection';
import Slider from '../components/ui/Slider/Slider';
import SectionWrapper from '../components/ProductDetail/SectionWrapper';

const product = { 
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
              <ProductDetailSection />
            </Col>
          </Row>
        </Container>
      </PageLayout>
    )
  }
}

ProductDetailPage.propTypes = {

}

export default ProductDetailPage
