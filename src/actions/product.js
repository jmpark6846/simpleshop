import { PRODUCT_LOAD, REVIEW_ADD, REVIEW_DELETE, LOAD_NEW_PAGE, PRODUCTS_LOAD, PRODUCT_REQUEST_SUCCESS, PRODUCT_REQUEST_FAIL, PRODUCTS_REQUEST_SUCCESS, PRODUCTS_REQUEST_FAIL } from "../constants/actionTypes";

export const doReviewAdd = (review) => ({
  type: REVIEW_ADD,
  review
})

export const doReviewDelete = (id) => ({
  type: REVIEW_DELETE,
  id
})

export const doLoadNewPage = () => ({
  type: LOAD_NEW_PAGE,
})

export const doLoadProduct = (productId) => ({
  type: PRODUCT_LOAD,
  productId
})

export const doLoadProductSuccess = ({product}) => ({
  type: PRODUCT_REQUEST_SUCCESS,
  product
})

export const doLoadProductFail  = ({error}) => ({
  type: PRODUCT_REQUEST_FAIL,
  error
})

export const doLoadProducts = () => ({
  type: PRODUCTS_LOAD,
})

export const doLoadProductsSuccss = ({productList}) => ({
  type: PRODUCTS_REQUEST_SUCCESS,
  productList
})

export const doLoadProductsFail  = ({error}) => ({
  type: PRODUCTS_REQUEST_FAIL,
  error
})
