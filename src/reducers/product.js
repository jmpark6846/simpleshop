import { REVIEW_ADD, REVIEW_DELETE, PRODUCT_LOAD } from "../constants/actionTypes";

const INITIAL_STATE = {
  id: undefined,
  name: '',
  price: 0,
  thumbnail: '',
  imgs: [],
  rating:0,
  reviews: [],
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
      return { ...state, reviews: state.reviews.concat(action.review) }
    case REVIEW_DELETE:
      return { ...state, reviews: state.reviews.filter(review => review.id !== action.id) }
    default:  
      return state
  }
}