import { products } from "../constants/dummy";
const SUCCESS = 'SUCCESS'
const FAIL = 'FAIL'

const mockAsyncCall = (state=SUCCESS, data, error) => {
  return new Promise(function(resolve, reject){
    setTimeout(()=>{ 
      state === 'SUCCESS' ? resolve(data) : reject(new Error(error)) 
    }, 2000)
    }).then((data)=> ({data})).catch((error)=> ({error}))
}

export const productList = () => {
  return mockAsyncCall(SUCCESS, products, '상품 리스트를 불러오지 못했습니다.')
}