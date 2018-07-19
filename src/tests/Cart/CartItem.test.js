import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'
import { cart } from '../../reducers/cart'
import { CartItem } from '../../components/ui/Cart/CartItem';
import { ADD_TO_CART } from '../../constants/actionTypes';

Enzyme.configure({ adapter: new Adapter()})

describe('CartItem', () => {
  const cartItem = { 
    id:0, 
    name: 'bag', 
    price: 100,
    img: '/path/to/bag.jpg', 
  }

  it('CartItem snapshot test', () => {
    const tree = renderer.create(<CartItem cartItem={cartItem} />).toJSON()
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
  it('initial state 리턴', ()=> {
    const initialState = {
      cartItems: {},
      totalPrice: 0,
      show: false,
      error: false,
      errorMsg: '',
    }
    expect(cart(undefined, {})).toEqual(initialState)
  })

  it('ADD TO CART', () => {
    const addedCartItem = { 
      id:0, 
      name: 'bag', 
      price: 100,
      img: '/path/to/bag.jpg', 
      ea: 1
    }
    const action = { type: ADD_TO_CART, cartItem: addedCartItem}
    const afterState = cart(undefined, action)

    expect(afterState).toEqual({
      error:false,
      errorMsg:'',
      show: true,
      cartItems: { 0 : addedCartItem },
      totalPrice: 100
    })
  })
})