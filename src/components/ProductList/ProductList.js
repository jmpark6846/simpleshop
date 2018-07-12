import React from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col } from '../ui-components/grid';
import ProductListItem from './ProductListItem';

const products = [
  { id:0, name: 'Adventurist Daypack - Black', price: 590000, img: '/src/asset/img/2.jpg' },  
  { id:1, name: 'Adventurist Daypack - Pine', price: 5800000, img: '/src/asset/img/1.jpeg' },   
  { id:2, name: 'Adventurist Daypack - Sand', price: 60000, img: '/src/asset/img/3.jpg' },
  { id:3, name: 'Adventurist Daypack - Black', price: 610, img: '/src/asset/img/2.jpg' },  
  { id:4, name: 'Adventurist Daypack - Pine', price: 6200, img: '/src/asset/img/1.jpeg' },   
  { id:5, name: 'Adventurist Daypack - Sand', price: 6300000, img: '/src/asset/img/3.jpg' },
  { id:6, name: 'Adventurist Daypack - Black', price: 6400, img: '/src/asset/img/2.jpg' },  
  { id:7, name: 'Adventurist Daypack - Pine', price: 65000, img: '/src/asset/img/1.jpeg' },   
  { id:8, name: 'Adventurist Daypack - Sand', price: 66000, img: '/src/asset/img/3.jpg' }
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
