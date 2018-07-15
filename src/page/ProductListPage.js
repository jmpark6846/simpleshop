import React from 'react'
import PageLayout from './PageLayout';
import ProductList from '../components/ProductList/ProductList'
import Header from '../components/ui/Header/Header';

const ProductListPage = () => {
  return (
    <PageLayout page='product-list-page'>
      <Header className='page-header' header='Products' />
      <ProductList /> 
    </PageLayout>
  )
}

export default ProductListPage
