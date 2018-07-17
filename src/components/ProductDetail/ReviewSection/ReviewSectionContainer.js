import React from 'react'
import { connect } from 'react-redux'
import { ReviewSection } from './ReviewSection'

const mapState = ({product}) => ({
  rating: product.rating,
  reviews: product.reviews,
})

export default connect(mapState)(ReviewSection)