import { createStore, applyMiddleware, combineReducers } from 'redux'
import { createLogger } from '../../../Users/user/AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/redux-logger'
import createSagaMiddleware from 'redux-saga'

import { cart, product, order } from './reducers'

const root = combineReducers({
  cart: cart,
  product: product,
  order: order,
})

const saga = createSagaMiddleware()
let store=null

if(process.env.NODE_ENV === 'development'){
  store = createStore(root, undefined, applyMiddleware(createLogger(), saga))  
}else{  
  store = createStore(root, undefined, applyMiddleware(saga))  
}

saga.run(rootSaga)
export default store