import React, { Component } from 'react'
import { Route, Switch, BrowserRouter, HashRouter } from 'react-router-dom'

import './App.css'

import ProductListPage from "../page/ProductListPage";
import ProductDetailPage from '../page/ProductDetailPage';
import OrderSuccessPage from '../page/OrderSuccessPage';

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <HashRouter>
          <Switch>  
            <Route path='/' component={ProductListPage} exact />
            <Route path='/product/:id' component={ProductDetailPage} />
            <Route path='/checkout' component={OrderSuccessPage} />
          </Switch>
        </HashRouter>
      </div>
    )
  }
}
