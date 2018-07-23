import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from "react-redux";

import PageLayout from './PageLayout';
import Header from '../components/ui/Header/Header';
import SectionWrapper from '../components/ProductDetail/SectionWrapper';
import OrderItemRow from '../components/Order/OrderItemRow'
import { Container } from '../components/ui-components/grid';
import TotalPriceSection from '../components/Order/TotalPriceSection';

export class OrderSuccessPage extends Component {
  static propTypes = {
    orderItems: PropTypes.object
  }
  
  render() {
    const { orderItems, totalPrice } = this.props
    console.log(orderItems)
    return (
      <PageLayout page='order'>
        <Container>
          <Header header='주문 완료' />
          { orderItems && Object.values(orderItems).map(orderItem => <OrderItemRow key={orderItem.id} orderItem={orderItem} />) }
          <TotalPriceSection totalPrice={totalPrice} />
        </Container>
      </PageLayout>
    )
  }
}

const mapState = ({order}) => ({
  orderItems: order.orderItems,
  totalPrice: order.totalPrice
})

export default connect(mapState)(OrderSuccessPage)
