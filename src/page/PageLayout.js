import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import NavigationBar from '../components/ui/NavigationBar'
import { doLoadNewPage } from '../actions/cart';

const PageLayout = ({page, children, load}) => {
  load()
  return (
    <React.Fragment>
      <NavigationBar />
      <div className={`page ${page}`}>
        {children}
      </div>
      
    </React.Fragment>
  )
}

PageLayout.propTypes = {
  children: PropTypes.node
}

const mapDispatch = (dispatch) => ({
  load: () => dispatch(doLoadNewPage())
})
export default connect(undefined, mapDispatch)(PageLayout)
