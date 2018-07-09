import React from 'react'
import PropTypes from 'prop-types'
import PageLayout from './PageLayout';
import ProductList from '../components/ProductList/ProductList'
import Header from '../components/ui/Header';

const ProductListPage = () => {
  return (
    <PageLayout page='product-list-page'>
      <Header className='page-header' header='Products' />
      <ProductList /> 
    </PageLayout>
  )
}

ProductListPage.propTypes = {

}

export default ProductListPage
