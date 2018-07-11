import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './Button.css';
import Icon from '../ui-components/Icon/Icon';

const Button = ({className, primary, onClick, icon, value}) => {
  return (
    <button className={classNames('button', className, { primary })} onClick={onClick}>
      { icon ? 
        <Icon icon={icon} />
        :
        value
      }
    </button>
  )
}

Button.propTypes = {
  className: PropTypes.string,
  primary: PropTypes.bool,
  onClick: PropTypes.func,
  value: PropTypes.string
}

export default Button
