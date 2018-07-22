import { REVIEW_ADD, REVIEW_DELETE, PRODUCT_LOAD, LOAD_NEW_PAGE, PRODUCTS_LOAD, PRODUCTS_REQUEST_SUCCESS, PRODUCTS_REQUEST_FAIL } from "../constants/actionTypes";

const INITIAL_STATE = {
  id: undefined,
  name: '',
  price: 0,
  thumbnail: '',
  imgs: [],
  rating:0,
  reviews: [],
  productList: {}
}

// review id
// rating
// title
// content
// created date
// username

export const product = (state=INITIAL_STATE, action) => {
  switch(action.type){
    case PRODUCT_LOAD:
      return { ...state, ...action.product }
    case REVIEW_ADD:
      const updatedReviews = state.reviews.concat(action.review)
      const updatedRating = updatedReviews.reduce((a,c) => a + c.rating, 0) / updatedReviews.length
      return { ...state, reviews: updatedReviews, rating: updatedRating }
    case REVIEW_DELETE:
      return { ...state, reviews: state.reviews.filter(review => review.id !== action.id) }
    case LOAD_NEW_PAGE:
      return INITIAL_STATE
    case PRODUCTS_REQUEST_SUCCESS:
      return { ...state, productList: { ...state.productList, ...getProductsById(action.productList)} }
    default:  
      return state
  }
}

function getProductsById(products){
  let productsById={} ;
  products.forEach(product => productsById[product.id] = product)
  return productsById
}