import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Slider from '../ui-components/Slider/Slider';

const mapState = ({product}) => ({
  imgs: product.imgs
})

export default connect(mapState)(Slider)
