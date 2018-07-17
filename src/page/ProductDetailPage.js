import React from 'react'
import PageLayout from './PageLayout';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { Col, Row, Container } from '../components/ui-components/grid';
import ProductInfoSection from '../components/ProductDetail/ProductInfoSection';
import Slider from '../components/ui-components/Slider/Slider';
import SectionWrapper from '../components/ProductDetail/SectionWrapper';
import ProductInfoRow from '../components/ProductDetail/ProductInfoRow';
import Button from '../components/ui-components/Button/Button';
import ReviewSection from '../components/ProductDetail/ReviewSection'
import { doAddToCart } from '../actions/cart';
import { products } from "../constants/dummy";
import './ProductDetailPage.css'


class ProductDetailPage extends React.Component{
  constructor(props){
    super(props)

    this.state = { 
      product: undefined,
      reviews: [],
      ea: 1,
      shippingRate: 3000,
      shippingRateFreeLimit: 30000,
      totalPrice: 0
    }
  }

  componentDidMount = () => {
    const id = this.props.match.params.id
    this.setState({product: products[id], totalPrice: products[id].price})
  }
  
  setEA = (ea) => {
    const totalPrice = ea * this.state.product.price
    this.setState({ 
      totalPrice,
      ea
    })
  }
  
  addReview = ({review}) => {
    // this.postData({url, review})
    this.setState({ reviews: this.state.reviews.concat(review) })
  }

  get cartItem() {
    const { product } = this.state

    return product ? 
    {
      id: product.id, 
      name: product.name, 
      price: product.price, 
      img: product.imgs[0], 
      ea:this.state.ea
    } 
    : undefined
  }

  render(){
    const { product } = this.state
    return (
      <PageLayout page='product-detail-page'>
        { product ?
        <Container>
          <Row>
            <Col desktop={6}>
              <SectionWrapper>
                <Slider imgs={product.imgs} />
              </SectionWrapper>
            </Col>
            <Col desktop={6}>
              <ProductInfoSection setEA={this.setEA} {...this.state} product={product} />
              <SectionWrapper>
                <ProductInfoRow>
                  <Button onClick={()=>this.props.addToCart(this.cartItem)} value='장바구니 담기'/>
                  <Button value='구매하기' primary />
                </ProductInfoRow>
              </SectionWrapper>
              
            </Col>
          </Row>
          <Row>
            <ReviewSection rating={product.rating} reviews={product.reviews}/>
          </Row>
        </Container>
        :
        <div>loading...</div>
        }
      </PageLayout>
    )
  }
}

ProductDetailPage.propTypes = {
  addToCart: PropTypes.func
}

const mapDispatch = (dispatch) => ({
  addToCart: (cartItem) => dispatch(doAddToCart(cartItem))
})

export default connect(undefined, mapDispatch)(ProductDetailPage)
