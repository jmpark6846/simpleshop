import productSagas from "./productSagas";

// https://github.com/reactkr/learn-react-in-korean/blob/master/translated/deal-with-async-process-by-redux-saga.md

export default function* rootSaga(){
  yield fork(productSagas)
}