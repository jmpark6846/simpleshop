import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import NavigationBar from '../components/ui/NavigationBar'
import { doLoadNewPage } from '../actions/product';

class PageLayout extends React.Component{
  componentDidMount = () => {
    this.props.loadPage()
  }
  
  render(){
    const { page, children } = this.props
    return (
      <React.Fragment>
        <NavigationBar />
        <div className={`page ${page}`}>
          {children}
        </div>
      </React.Fragment>
    )
  }
}

PageLayout.propTypes = {
  children: PropTypes.node
}

const mapDispatch = (dispatch) => ({
  loadPage: () => dispatch(doLoadNewPage())
})

export default connect(undefined, mapDispatch)(PageLayout)
