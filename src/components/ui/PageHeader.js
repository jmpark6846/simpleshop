import React from 'react'
import PropTypes from 'prop-types'
import './PageHeader.css'

const PageHeader = ({title}) => {
  return (
    <div className='page-header'>{title}</div>
  )
}

PageHeader.propTypes = {
  title: PropTypes.string
}

export default PageHeader
