import React from 'react'
import PageLayout from './PageLayout';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { Col, Row, Container } from '../components/ui-components/grid';
import ProductInfoSection from '../components/ProductDetail/ProductInfoSection/ProductInfoSectionContainer';
import ReviewSection from '../components/ProductDetail/ReviewSection/ReviewSectionContainer'

import SectionWrapper from '../components/ProductDetail/SectionWrapper';
import ProductInfoRow from '../components/ProductDetail/ProductInfoRow';
import Button from '../components/ui-components/Button/Button';

import { doAddToCart } from '../actions/cart';
import { products } from "../constants/dummy";
import './ProductDetailPage.css'
import { doLoadProduct } from '../actions/product';
import Slider from '../components/ProductDetail/Slider';
import CartMessage from '../components/ui/Cart/CartMessage';


class ProductDetailPage extends React.Component{
  constructor(props){
    super(props)

    this.state = { 
      ea: 1,
      shippingRate: 3000,
      shippingRateFreeLimit: 30000,
      totalPrice: undefined,
      cartMessageShow: false
    }
  }

  mockAsyncLoadProduct = (id) => {
    return products[id]
  }
  
  componentDidMount = () => {
    const id = this.props.match.params.id
    const product = this.mockAsyncLoadProduct(id)
    this.props.loadProduct(product)
  }

  componentDidUpdate = (prevProps, prevState) => {
    if(prevProps.product.price !== this.props.product.price){
      this.setState({totalPrice: this.props.product.price * this.state.ea})
    }
  }

  handleEAChange = (ea) => {
    this.setState({ ea, totalPrice: ea * this.props.product.price })
  }

  get order() {
    const { product } = this.props
    return {
      id: product.id, 
      name: product.name, 
      price: product.price, 
      img: product.imgs[0], 
      ea:this.state.ea
    }
  }

  handleAddToCart = () => {
    this.props.addToCart(this.order)
    this.setState({ cartMessageShow: true })
  }

  handleCloseClick = () => {
    this.setState({ cartMessageShow: false })
  }

  render(){
    const { cartMessageShow } = this.state
    const { loaded } = this.props
    return (
      <PageLayout page='product-detail-page'>
        { 
        loaded ?
        <Container>
          <Row>
            <Col desktop={6}>
              <SectionWrapper>
                <Slider />
              </SectionWrapper>
            </Col>
            <Col desktop={6}>
              <ProductInfoSection handleEAChange={this.handleEAChange} {...this.state}/>
              <SectionWrapper>
                  <CartMessage handleCloseClick={this.handleCloseClick} show={cartMessageShow}/>
                  <ProductInfoRow>  
                    <Button onClick={this.handleAddToCart} value='장바구니 담기'/>
                    <Button value='구매하기' primary />
                  </ProductInfoRow>
                
              </SectionWrapper>
            </Col>
          </Row>
          <Row>
            <ReviewSection />
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
  addToCart: PropTypes.func,
  loaded: PropTypes.bool,
  product: PropTypes.object,
}

const mapState = ({product}) => ({
  loaded: product.id !== undefined,
  product,
})

const mapDispatch = (dispatch) => ({
  loadProduct: (product) => dispatch(doLoadProduct(product)),
  addToCart: (cartItem) => dispatch(doAddToCart(cartItem))
})

export default connect(mapState, mapDispatch)(ProductDetailPage)
