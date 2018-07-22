import { takeEvery } from "redux-saga/effects";
import { PRODUCTS_LOAD } from "../constants/actionTypes";
import * as Api from './Api'
import { loadProductsSuccss, loadProductsFail } from "../actions/product";

function* loadProducts(){
  const { data, error } = yield call(Api.loadProducts)
  if( data && !error ){
    yield put(loadProductsSuccss({ data }))
  }else{
    yield put(loadProductsFail({ error }))
  }
}

export default function* productSagas(){
  yield takeEvery(PRODUCTS_LOAD, loadProducts)
}