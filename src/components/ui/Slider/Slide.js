import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
const Slide = ({show, img, toggleZoom}) => {
  return (
    <li 
      onClick={toggleZoom} 
      className={classNames('slide', { show })} 
      style={{ backgroundImage: `url(${img})` }}
      >
    </li>
  )
}

Slide.propTypes = {
  img: PropTypes.string
}

export default Slide
