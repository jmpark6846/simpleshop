import React, { Component } from 'react'
import PropTypes from 'prop-types'
import PageLayout from './PageLayout';
import Header from '../components/ui/Header/Header';
import SectionWrapper from '../components/ProductDetail/SectionWrapper';

export class CheckoutPage extends Component {
  static propTypes = {
    orderItems: PropTypes.object
  }

  render() {
    return (
      <PageLayout page='checkout'>
        <Header header='주문' />
        <SectionWrapper>
          
        </SectionWrapper>
      </PageLayout>
    )
  }
}

export default CheckoutPage
