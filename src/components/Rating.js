import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Icon from '../components/ui-components/Icon/Icon'
import './Rating.css'

const maxRating = 5
const Rating = ({rating, className, reviewCount}) => {
  const star = parseInt(rating)
  const half = rating*10%10 !== 0 ? 1 : 0
  const arr = Array(maxRating).fill('star', 0, star).fill('half', star, star+half).fill('blank', star+half, maxRating)
  // 2.3
  // 별별반빈빈
  // 5
  // 4 별별별별빈
  return (
    <div className={classNames('rating', className)}>
      {arr.map((s,i)=>{
        if(s === 'star')
          return <Icon key={i} icon='fas fa-star' />
        else if(s === 'half')
          return <Icon key={i} icon='fas fa-star-half-alt' />
        else 
          return <Icon key={i} icon='far fa-star' />
      })}
      { reviewCount &&
        <span className='review-count'>
          구매평 {reviewCount}
        </span>
      }
    </div>
  )
}

Rating.propTypes = {
  rating: PropTypes.number,
  reviewCount: PropTypes.number,
}

export default Rating
