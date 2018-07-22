import productSagas from "./productSagas";
import { fork } from "redux-saga/effects";

// https://github.com/reactkr/learn-react-in-korean/blob/master/translated/deal-with-async-process-by-redux-saga.md

export default function* rootSaga(){
  yield fork(productSagas)
}