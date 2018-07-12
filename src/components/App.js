import React, { Component } from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'

import './App.css'

import ProductListPage from "../page/ProductListPage";
import ProductDetailPage from '../page/ProductDetailPage';

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <BrowserRouter>
          <Switch>
            <Route path='/' component={ProductListPage} exact />
            <Route path='/product/:id' component={ProductDetailPage} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}
