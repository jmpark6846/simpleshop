import React from 'react'
import PropTypes from 'prop-types'
import PageLayout from './PageLayout';
import { Col, Row, Container } from '../components/ui-components/grid';

const ProductDetailPage = ({product}) => {
  return (
    <PageLayout>
      <Container>
        <Row>
          <Col desktop={6}>
            <img src={product.img}/>
          </Col>
          <Col desktop={6}>
            <ProductTitle />
            <Price />
          </Col>
        </Row>
        <div className='product-explation'>

        </div>
      </Container>
    </PageLayout>
  )
}

ProductDetailPage.propTypes = {

}

export default ProductDetailPage
