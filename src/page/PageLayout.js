import React from 'react'
import PropTypes from 'prop-types'
import NavigationBar from '../components/ui/NavigationBar'

class PageLayout extends React.Component{
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

export default PageLayout
