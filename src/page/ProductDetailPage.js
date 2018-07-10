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

const product = { 
  name: 'Adventurist Daypack - Pine', 
  price: 580000, 
  img: '/src/asset/img/1.jpeg',
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
      ea: 0
    }
  }

  setEA = (ea) => {
    this.setState({ ea })
  }

  render(){
    return (
      <PageLayout page='product-detail-page'>
        <Container>
          <Row>
            <Col desktop={6}>
              <div className='section-wrapper'>
                <Image className='product-img' src={product.img}/>
              </div>
            </Col>
            <Col desktop={6}>
              <div className='section-wrapper'>
                <Header className='product-name' header={product.name} />
                <Rating rating={product.rating} reviewCount={product.reviewCount} />
                <Price className='price' suffix='원' price={product.price} />
  
                <div>
                  <NumberSelector onChange={this.setEA} number={this.state.ea}/>
                  <Price className='price' suffix='원' price={product.price*this.state.ea} />
                </div>
              </div>
            </Col>
          </Row>
          <div className='section-wrapper product-explation'>
  
          </div>
        </Container>
      </PageLayout>
    )
  }
}

ProductDetailPage.propTypes = {

}

export default ProductDetailPage
