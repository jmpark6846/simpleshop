import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../../ui-components/Icon/Icon';
import Image from '../../ui-components/Image';
import classNames from 'classnames'

const LightBox = ({show, img, toggleZoom}) => {
  return (
    <div className={classNames('lightbox', { show })} onClick={toggleZoom}>
      <div className='close' onClick={toggleZoom}><Icon icon='fas fa-times'/></div>
      <Image src={img} />
    </div>
  )
}

LightBox.propTypes = {

}

export default LightBox
