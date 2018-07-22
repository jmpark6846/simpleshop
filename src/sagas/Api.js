import { products } from "../constants/dummy";

export const asyncCall = () => {
  setTimeout(null, 1000)
}

export const loadProducts = () => {
  asyncCall()
  return { data: products }
}