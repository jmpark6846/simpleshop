import { ORDER_ADD } from "../constants/actionTypes";

export const doOrderAdd = (orderItems) => ({
  type: ORDER_ADD,
  orderItems
})