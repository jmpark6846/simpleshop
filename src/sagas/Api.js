import { products } from "../constants/dummy";
const SUCCESS = 'SUCCESS'
const FAIL = 'FAIL'

const mockAsyncCall = (state=SUCCESS, data, error) => {
  return new Promise(function(resolve, reject){
    setTimeout(()=>{ 
      state === 'SUCCESS' ? resolve(data) : reject(new Error(error)) 
    }, 300)
    }).then((data)=> ({data})).catch((error)=> ({error}))
}

export const productList = () => {
  return mockAsyncCall(SUCCESS, products, '상품 리스트를 불러오지 못했습니다.')
}

export const product = (productId) => {
  return mockAsyncCall(SUCCESS, products[productId], `상품[${productId}]을 불러오지 못했습니다.`)
}

export const purchase = () => {
  return mockAsyncCall(SUCCESS, { success: true }, '주문 실패')
}