import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from "react-redux";

import PageLayout from './PageLayout';
import Header from '../components/ui/Header/Header';
import SectionWrapper from '../components/ProductDetail/SectionWrapper';
import CheckoutItemRow from '../components/Checkout/CheckoutItemRow';

export class CheckoutPage extends Component {
  static propTypes = {
    orderItems: PropTypes.object
  }
  
  render() {
    const { orderItems } = this.props
    console.log(orderItems)
    return (
      <PageLayout page='checkout'>
        <Header header='주문' />
        <SectionWrapper>
          { orderItems && orderItems.map(orderItem => <CheckoutItemRow checkoutItem={orderItem} />) }
        </SectionWrapper>
      </PageLayout>
    )
  }
}

const mapState = ({order}) => ({
  orderItems: order.orderItems
})

export default connect(mapState)(CheckoutPage)
