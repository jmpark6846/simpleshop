import React from 'react'
import PropTypes from 'prop-types'

const ProductListPage = () => {
  return (
    <div className='product-list-page'>
      <PageHeader title='Products' />
      <ProductList /> 
    </div>
  )
}

ProductListPage.propTypes = {

}

export default ProductListPage
