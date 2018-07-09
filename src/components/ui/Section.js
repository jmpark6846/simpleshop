import React from 'react'
import PropTypes from 'prop-types'
import './Section.css'

const Section = ({children}) => {
  return (
    <div className='section'>
      {children}      
    </div>
  )
}

Section.propTypes = {
  children: PropTypes.node
}

export default Section
