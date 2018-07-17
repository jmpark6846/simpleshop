import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './SectionWrapper.css'

const SectionWrapper = ({children, className}) => {
  return (
    <div className={classNames('section-wrapper', className)}>
      {children}
    </div>
  )
}

SectionWrapper.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

export default SectionWrapper
