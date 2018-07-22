import React from 'react'
import { connect } from 'react-redux'
import { Container, Row, Col } from '../ui-components/grid';
import ProductListItem from './ProductListItem';

const ProductList = ({productList}) => {
  return (
    <div className='product-list'>
      { productList ?
        <Container>
          <Row>
            { Object.values(productList).map((p,i)=>
              <Col key={i} desktop={4}><ProductListItem product={p} /></Col>)
            }
          </Row>
        </Container>
        :
        <Container>Loading...</Container>
      }
    </div>
  )
}

const mapState = ({product}) => ({
  productList: product.productList
})
export default connect(mapState)(ProductList)
