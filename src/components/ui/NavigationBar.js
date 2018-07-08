import React from 'react'
import PropTypes from 'prop-types'
import NavBar from '../ui-components/NavBar/NavBar';
import NavHeader from '../ui-components/NavBar/NavHeader';
import NavMenu from '../ui-components/NavBar/NavMenu';
import NavItem from '../ui-components/NavBar/NavItem';
import './NavigationBar.css'
import Icon from '../ui-components/Icon/Icon';
import ToggleButton from '../ui-components/NavBar/ToggleButton';

class NavigationBar extends React.Component {
  constructor(props){
    super(props)

    this.state={ toggle:false }
  }

  handleToggle = () => {
    this.setState({toggle:!this.state.toggle})
  }
  
  render(){
    return (
      <NavBar className='navigation-bar' >
        <ToggleButton onClick={this.handleToggle}/>
        <NavHeader>Simpleshop</NavHeader>
        <NavMenu pullRight>
          <NavItem to='/shop'>Shop</NavItem>
          <NavItem to='/blog'>Blog</NavItem>
          <NavItem to='/about'>About Us</NavItem>
        </NavMenu>
      </NavBar>
    )
  }
}

NavigationBar.propTypes = {

}

export default NavigationBar
