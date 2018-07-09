import React from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col } from '../ui-components/grid';
import ProductListItem from './ProductListItem';

const products = [
  { name: 'Adventurist Daypack - Black', price: 590000, img: '/src/asset/img/2.jpg' },  
  { name: 'Adventurist Daypack - Pine', price: 5800000, img: '/src/asset/img/1.jpeg' },   
  { name: 'Adventurist Daypack - Sand', price: 60000, img: '/src/asset/img/3.jpg' },
  { name: 'Adventurist Daypack - Black', price: 610, img: '/src/asset/img/2.jpg' },  
  { name: 'Adventurist Daypack - Pine', price: 6200, img: '/src/asset/img/1.jpeg' },   
  { name: 'Adventurist Daypack - Sand', price: 6300000, img: '/src/asset/img/3.jpg' },
  { name: 'Adventurist Daypack - Black', price: 6400, img: '/src/asset/img/2.jpg' },  
  { name: 'Adventurist Daypack - Pine', price: 65000, img: '/src/asset/img/1.jpeg' },   
  { name: 'Adventurist Daypack - Sand', price: 66000, img: '/src/asset/img/3.jpg' }
]

const ProductList = () => {
  return (
    <div className='product-list'>
      <Container>
        <Row>
          { products.map((p,i)=>
              <Col key={i} desktop={4}><ProductListItem product={p} /></Col>)
          }
        </Row>
      </Container>
    </div>
  )
}

ProductList.propTypes = {

}

export default ProductList
