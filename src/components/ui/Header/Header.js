import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import './Header.css'

const Header = ({className, header}) => {
  return (
    <div className={classNames('header', className)}>
      {header}
    </div>
  )
}

Header.propTypes = {
  className: PropTypes.string,
  header: PropTypes.string,
}

export default Header
