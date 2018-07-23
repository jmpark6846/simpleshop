import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from '../ui-components/grid';
import Price from '../ui-components/Price/Price';

const TotalPriceSection = ({totalPrice}) => {
  return (
    <Row className='total-price-section'>
      <Col desktop={8}></Col>
      <Col className='total-price-label' desktop={2}>총 금액</Col>
      <Col className='total-price' desktop={2}><Price price={totalPrice}  suffix='원'/></Col>
    </Row>
  )
}

TotalPriceSection.propTypes = {
  totalPrice: PropTypes.number
}

export default TotalPriceSection
