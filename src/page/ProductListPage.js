import React from 'react'
import PropTypes from 'prop-types'
import PageLayout from './PageLayout';
import ProductList from '../components/ProductList/ProductList'
import PageHeader from '../components/ui/PageHeader'

const ProductListPage = () => {
  return (
    <PageLayout>
      <PageHeader title='Products' />
      <ProductList /> 
    </PageLayout>
  )
}

ProductListPage.propTypes = {

}

export default ProductListPage
