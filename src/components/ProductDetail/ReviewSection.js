import React from 'react'
import PropTypes from 'prop-types'
import SectionWrapper from './SectionWrapper';
import ReviewRow from './ReviewRow';
import ReviewForm from './ReviewForm';
import Header from '../ui/Header/Header';
import Rating from '../ui-components/Rating/Rating';
import Button from '../ui-components/Button/Button';

class ReviewSection extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      showReviewForm: false
    }
  }

  reviewFormToggle = () => {
    this.setState({ showReviewForm : !this.state.showReviewForm })
  }

  render(){
    const { reviews, rating } = this.props
    const { showReviewForm } = this.state
    return (
      <SectionWrapper className='review-section'>
        <Header header='고객 리뷰' />
        <div>
          <Rating value={rating} /> 리뷰 {reviews.length} 개
          <Button onClick={this.reviewFormToggle} value='리뷰 쓰기' />
        </div>
        
        <ReviewForm show={showReviewForm}/>
        {reviews.map(review => <ReviewRow key={review.id} review={review} />)}
      </SectionWrapper>
    )
  }
}

ReviewSection.propTypes = {
  rating: PropTypes.number, 
  reviews: PropTypes.array
}

export default ReviewSection
