import React from 'react'
import PropTypes from 'prop-types'
import './Header.css'

const Header = ({header, className}) => {
  return (
    <div className={'header ' + className}>{header}</div>
  )
}

Header.propTypes = {
  header: PropTypes.string,
  className: PropTypes.string,
}

export default Header
