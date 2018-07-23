import React from 'react'
import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types'
import Price from '../ui-components/Price/Price';
import './OrderItemRow.css'
import { Row, Col } from '../ui-components/grid';

const OrderItemRow = ({orderItem}) => {
  return (
    <Row className='order-item-row'>
      <Col desktop={2}>
        <div className='order-item-image' style={{ backgroundImage: `url(${orderItem.img})` }}></div>
      </Col>
      <Col desktop={6}>
      <NavLink className='order-item-name' to={'/product/'+orderItem.id} >{ orderItem.name.length > 40 ? `${orderItem.name.substr(0,40)}...` : orderItem.name }</NavLink>
      </Col>
      <Col desktop={2}>
        { orderItem.ea } 개
      </Col>
      <Col className='order-item-price' desktop={2}>
          <Price price={ orderItem.price } suffix='원' /> 
      </Col>
    </Row>
  )
}

OrderItemRow.propTypes = {
  orderItem: PropTypes.object
}

export default OrderItemRow
