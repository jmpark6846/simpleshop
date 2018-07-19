import React from 'react'
import NavBar from '../ui-components/NavBar/NavBar';
import NavHeader from '../ui-components/NavBar/NavHeader';
import NavMenu from '../ui-components/NavBar/NavMenu';
import NavItem from '../ui-components/NavBar/NavItem';
import './NavigationBar.css'
import Button from '../ui-components/Button/Button';
import Cart from "./Cart/Cart";

class NavigationBar extends React.Component {
  render(){
    return (
      <NavBar className='navigation-bar' >
        <NavHeader>Simpleshop</NavHeader>
        <NavMenu pullRight>
          <NavItem to='/'>Shop</NavItem>          
          <NavItem><Cart /></NavItem>
        </NavMenu>  
        
      </NavBar>
    )
  }
}

export default NavigationBar
