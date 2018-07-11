import React from 'react'
import PropTypes from 'prop-types'

const TabGroup = ({children}) => {
  
  return (
    <div className='tab-group'>
      {children}
    </div>
  )
}

TabGroup.propTypes = {
  children: PropTypes.node,
}

export default TabGroup
