import React from 'react'
import { connect } from 'react-redux'
import ProductInfoSection from "./ProductInfoSection";

const mapState = ({product}) => ({ product })

export default connect(mapState)(ProductInfoSection)
