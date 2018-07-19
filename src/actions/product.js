import { PRODUCT_LOAD, REVIEW_ADD, REVIEW_DELETE, LOAD_NEW_PAGE } from "../constants/actionTypes";

export const doLoadProduct = (product) => ({
  type: PRODUCT_LOAD,
  product
})

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