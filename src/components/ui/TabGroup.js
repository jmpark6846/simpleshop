import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from '../ui-components/grid';
import Tab from './Tab';

const TabGroup = ({tabs}) => {
  const tabSize = parseInt(12 / tabs.length)
  return (
    <Row className='tab-group'>
      { tabs.map(tab =><Col desktop={tabSize}><Tab key={tab} name={tab}/></Col>)}
    </Row>
  )
}

TabGroup.propTypes = {
  tabs: PropTypes.array,
}

export default TabGroup
