import React from 'react'
import { BrowserRouter as Router }    from 'react-router-dom';

import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'
import { cart } from '../../reducers/cart'
import { CartItem } from '../../components/ui/Cart/CartItem';
import { ADD_TO_CART, DELETE_CART_ITEM, EA_CHANGE } from '../../constants/actionTypes';

Enzyme.configure({ adapter: new Adapter()})

describe('CartItem', () => {
  const cartItem = { 
    id:0, 
    name: 'bag', 
    price: 100,
    img: '/path/to/bag.jpg', 
  }

  it('CartItem snapshot test', () => {
    const tree = renderer.create(<Router><CartItem cartItem={cartItem} /></Router>).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('CartItem을 렌더링 한다.', () => {
    const wrapper = shallow(<CartItem cartItem={cartItem} />)
    expect(wrapper.find('.cart-item').exists()).toBe(true)
  })

  it('cartItem props를 대입하면 상품의 이미지를 style의 backgroundImage로 설정한다.', () => {
    const wrapper = shallow(<CartItem cartItem={cartItem} />)
    expect(wrapper.find('.image').props().style.backgroundImage).toEqual(`url(${cartItem.img})`)
  })
})

describe('Cart Reducer -> CartItem', ()=>{
  const item = { 
    id:0, 
    name: 'bag', 
    price: 100,
    img: '/path/to/bag.jpg', 
    ea: 1
  }

  it('initial state 리턴', ()=> {
    const initialState = {
      cartItems: {},
      totalPrice: 0,
    }
    expect(cart(undefined, {})).toEqual(initialState)
  })

  it('ADD_TO_CART: 새로운 상품 추가', () => {
    
    const action = { type: ADD_TO_CART, cartItem: item}
    const afterState = cart(undefined, action)

    expect(afterState).toEqual({
      cartItems: { 0 : item },
      totalPrice: 100
    })
  })

  it('ADD_TO_CART: 이미 추가된 상품을 또 추가', ()=>{
    //given
    const beforeState = { cartItems: { 0: item }, totalPrice: 100 }
    const action = { type: ADD_TO_CART, cartItem: item }
    //when
    const afterState = cart(beforeState, action)
    //then
    expect(afterState).toEqual({ cartItems: { 0: {...item, ea: 2} }, totalPrice:200 })
  })

  it('DELETE_CART_ITEM', ()=>{
    const beforeState = { cartItems: { 0: item }, totalPrice: 100 }
    const action = { type: DELETE_CART_ITEM, id: item.id }
    const afterState = cart(beforeState, action)
    
    expect(afterState).toEqual({ cartItems: { }, totalPrice:0 })
  })

  it('EA_CHANGE', ()=> {
    const beforeState = { cartItems: { 0: item }, totalPrice: 100 }
    const action = { type: EA_CHANGE, id: item.id, ea: 10 }
    const afterState = cart(beforeState, action)

    expect(afterState).toEqual({ cartItems: { 0: { ...item, ea: 10 }}, totalPrice:1000 })
  })
})