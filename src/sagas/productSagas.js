import { takeEvery, call, put } from "redux-saga/effects";
import { PRODUCTS_LOAD, PRODUCT_LOAD } from "../constants/actionTypes";
import * as Api from './Api'
import { doLoadProductsFail, doLoadProductsSuccss, doLoadProductSuccess } from "../actions/product";

function* loadProducts(){
  const { data, error } = yield call(Api.productList)
  if( data && !error ){
    yield put(doLoadProductsSuccss({ productList: data }))
  }else{
    yield put(doLoadProductsFail({ error }))
  }
}

function* loadProduct(action){
  console.log(action)
  const { data, error } = yield call(Api.product, action.productId)
  if( data && !error ){
    yield put(doLoadProductSuccess({ product: data}))
  }else{
    yield put(doLoadProductsFail({ error }))
  }
}

export default function* productSagas(){
  yield takeEvery(PRODUCTS_LOAD, loadProducts)
  yield takeEvery(PRODUCT_LOAD, loadProduct)
}