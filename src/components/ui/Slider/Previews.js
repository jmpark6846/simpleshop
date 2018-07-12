import React from 'react'
import PropTypes from 'prop-types'
import Slide from './Slide'

const Previews = ({index, imgs, previewClick}) => {
  return (
    <div className='previews'>
      { imgs.map((img,i) => <Slide onClick={()=>previewClick(i)} show={index===i} key={i} img={img} />) }
    </div>
  )
}

Previews.propTypes = {

}

export default Previews
