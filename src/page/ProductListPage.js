import React from 'react'
import { connect } from 'react-redux'
import PageLayout from './PageLayout';
import ProductList from '../components/ProductList/ProductList'
import Header from '../components/ui/Header/Header';
import { doLoadProducts } from '../actions/product';

class ProductListPage extends React.Component{
  
  componentDidMount = () => {
    this.props.loadProductList()  
  }
  

  render(){
    return (
      <PageLayout page='product-list-page'>
        <Header className='page-header' header='Products' />
        <ProductList /> 
      </PageLayout>
    )
  }
}

const mapDispatch = (dispatch) => ({
  loadProductList: () => dispatch(doLoadProducts())
})

export default connect(undefined, mapDispatch)(ProductListPage)