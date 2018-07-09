import React from 'react'
import PropTypes from 'prop-types'

const PageLayout = ({children}) => {
  return (
    <React.Fragment>
      <NavigationBar />
      {children}
    </React.Fragment>
  )
}

PageLayout.propTypes = {

}

export default PageLayout
