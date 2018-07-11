import React from 'react'
import PropTypes from 'prop-types'
import './Carousel.css'
import Button from '../Button';

const Carousel = ({imgs}) => {
  return (
    <div className='carousel'>
      <Button icon='fas fa-angle-left' />
      <Button icon='fas fa-angle-right' />
      <Previews />
    </div>
  )
}

Carousel.propTypes = {
  imgs: PropTypes.array
}

export default Carousel
