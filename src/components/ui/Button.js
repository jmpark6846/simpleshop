import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './Button.css';

const Button = ({className, primary, onClick, value}) => {
  return (
    <button className={classNames('button', className, { primary })} onClick={onClick}>{value}</button>
  )
}

Button.propTypes = {
  className: PropTypes.string,
  primary: PropTypes.bool,
  onClick: PropTypes.func,
  value: PropTypes.string
}

export default Button
