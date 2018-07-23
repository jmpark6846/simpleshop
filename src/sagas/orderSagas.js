
import { takeEvery, call, put } from "redux-saga/effects";
import * as Api from './Api'

import { PURCHASE } from "../constants/actionTypes";
import { doPlaceOrder, doPurchaseSuccess, doPurchaseFail } from "../actions/order";

function* purchase({orderItems, push}){
  yield put(doPlaceOrder(orderItems))
  const { data, error } = yield call(Api.purchase)
  if( data && !error ){
    yield put(doPurchaseSuccess())
    push('/')
  }else{
    yield put(doPurchaseFail())
  }
}

export default function* orderSagas(){
  yield takeEvery(PURCHASE, purchase)
}