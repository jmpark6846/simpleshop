import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Slide = ({show, className, img, onClick}) => {
  return (
    <li 
      onClick={onClick} 
      className={classNames('slide', { className, show })} 
      style={{ backgroundImage: `url(${img})` }}
      >
    </li>
  )
}

Slide.propTypes = {
  img: PropTypes.string
}

export default Slide
