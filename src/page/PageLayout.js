import React from 'react'
import PropTypes from 'prop-types'
import NavigationBar from '../components/ui/NavigationBar'

const PageLayout = ({children}) => {
  return (
    <React.Fragment>
      <NavigationBar />
      {children}
    </React.Fragment>
  )
}

PageLayout.propTypes = {
  children: PropTypes.node
}

export default PageLayout
