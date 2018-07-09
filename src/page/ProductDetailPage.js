import React from 'react'
import PropTypes from 'prop-types'
import PageLayout from './PageLayout';
import Image from '../components/ui-components/Image';
import { Col, Row, Container } from '../components/ui-components/grid';

import Header from '../components/ui/Header';
import Price from '../components/Price';

const product = { name: 'Adventurist Daypack - Pine', price: 580000, img: '/src/asset/img/1.jpeg' }

const ProductDetailPage = () => {
  return (
    <PageLayout page='product-detail-page'>
      <Container>
        <Row>
          <Col desktop={6}>
            <div className='image-wrapper'>
              <Image className='' src={product.img}/>
            </div>
          </Col>
          <Col desktop={6}>
            <Header header={product.name} />
            <Price suffix='원' price={product.price} />
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
