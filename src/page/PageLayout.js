import React from 'react'
import PropTypes from 'prop-types'
import NavigationBar from '../components/ui/NavigationBar'

const PageLayout = ({page, children}) => {
  return (
    <React.Fragment>
      <NavigationBar />
      <div className={page}>
        {children}
      </div>
      
    </React.Fragment>
  )
}

PageLayout.propTypes = {
  children: PropTypes.node
}

export default PageLayout
