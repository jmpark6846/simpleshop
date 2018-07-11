import React from 'react'
import './Tab.css'
import PropTypes from 'prop-types'

const Tab = ({target, name}) => {
  
  return (
    <div className='tab'>
      <a href={`#${target}`}>
        {name}
      </a>
    </div>
  )
}

Tab.propTypes = {
  target: PropTypes.string,
  name : PropTypes.string,
}
export default Tab
