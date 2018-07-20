import { createStore, applyMiddleware, combineReducers } from 'redux'
import { createLogger } from 'redux-logger'
import { cart, product, order } from './reducers'

const root = combineReducers({
  cart: cart,
  product: product,
  order: order,
})

let store=null

if(process.env.NODE_ENV === 'development'){
  store = createStore(root, undefined, applyMiddleware(createLogger()))  
}else{  
  store = createStore(root, undefined)  
}

export default store