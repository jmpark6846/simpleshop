import { takeEvery, call, put } from "redux-saga/effects";
import { PRODUCTS_LOAD } from "../constants/actionTypes";
import * as Api from './Api'
import { doLoadProductsFail, doLoadProductsSuccss } from "../actions/product";

function* loadProducts(){
  const { data, error } = yield call(Api.productList)
  console.log(data)
  console.log(error)
  if( data && !error ){
    yield put(doLoadProductsSuccss({ data }))
  }else{
    yield put(doLoadProductsFail({ error }))
  }
}

export default function* productSagas(){
  yield takeEvery(PRODUCTS_LOAD, loadProducts)
}