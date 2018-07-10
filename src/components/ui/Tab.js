import React from 'react'
import './Tab.css'
import PropTypes from 'prop-types'

const Tab = ({name}) => {
  return (
    <div className='tab'>
      {name}
    </div>
  )
}

Tab.propTypes = {
  name : PropTypes.string,
}
export default Tab
