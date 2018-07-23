import { PURCHASE, PLACE_ORDER, PURCHASE_SUCCESS, PURCHASE_FAIL } from "../constants/actionTypes";

export const doPurchase = (orderItems, push) => ({
  type: PURCHASE,
  orderItems,
  push
})

export const doPlaceOrder = (orderItems) => ({
  type: PLACE_ORDER,
  orderItems
})

export const doPurchaseSuccess = () => ({
  type: PURCHASE_SUCCESS
})

export const doPurchaseFail = () => ({
  type: PURCHASE_FAIL
})