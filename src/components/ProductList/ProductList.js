import React from 'react'
import { Container, Row, Col } from '../ui-components/grid';
import ProductListItem from './ProductListItem';
import { products } from "../../constants/dummy";

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


export default ProductList
