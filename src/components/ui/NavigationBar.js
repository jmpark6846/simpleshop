import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import NavBar from '../ui-components/NavBar/NavBar';
import NavHeader from '../ui-components/NavBar/NavHeader';
import NavMenu from '../ui-components/NavBar/NavMenu';
import NavItem from '../ui-components/NavBar/NavItem';
import './NavigationBar.css'
import Button from './Button';
import Cart from "./Cart/Cart";
import { doToggleCart } from '../../actions/cart';

class NavigationBar extends React.Component {
  render(){
    return (
      <NavBar className='navigation-bar' >
        <NavHeader>Simpleshop</NavHeader>
        <NavMenu pullRight>
          <NavItem to='/'>Shop</NavItem>          
        </NavMenu>  
        <Button className='shopping-cart' icon='fas fa-shopping-cart' onClick={this.props.toggleCart}/>
        <Cart />
      </NavBar>
    )
  }
}

NavigationBar.propTypes = {
  toggleCart: PropTypes.func
}

const mapDispatch = (dispatch) => ({
  toggleCart: () => dispatch(doToggleCart())
})

export default connect(undefined, mapDispatch)(NavigationBar)
