import { PRODUCT_LOAD } from "../constants/actionTypes";

export const doLoadProduct = (product) => ({
  type: PRODUCT_LOAD,
  product
})