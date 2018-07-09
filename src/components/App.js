import React, { Component } from 'react'
import './App.css'
import NavigationBar from './ui/NavigationBar';
import ProductList from './ProductList';
import PageHeader from './ui/PageHeader';
import Section from './ui-components/Section/Section';

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <NavigationBar />
        <PageHeader title='Products' />
        <ProductList /> 
      </div>
    )
  }
}
