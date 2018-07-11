import React from 'react'
import PropTypes from 'prop-types'
import './SectionWrapper.css'

const SectionWrapper = ({children}) => {
  return (
    <div className='section-wrapper'>
      {children}
    </div>
  )
}

SectionWrapper.propTypes = {
  children: PropTypes.node
}

export default SectionWrapper
