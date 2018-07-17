import React from 'react'
import PropTypes from 'prop-types'
import Rating from '../ui-components/Rating/Rating';
import './ReviewRow.css'

const ReviewRow = ({review}) => {
  return (
    <div className='review-row'>
      <Rating value={review.rate} />
      <div className='title'>{review.title}</div>
      <div className='content'>{review.content}</div>
    </div>
  )
}

ReviewRow.propTypes = {
  review: PropTypes.object
}

export default ReviewRow
