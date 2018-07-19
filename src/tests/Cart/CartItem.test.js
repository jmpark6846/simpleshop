import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store';

import { CartItem } from '../../components/ui/Cart/CartItem';
import ConnectedCartItem from '../../components/ui/Cart/CartItem';

import { products } from "../../constants/dummy";

Enzyme.configure({ adapter: new Adapter()})

describe('CartItem', () => {
  const mockStore = configureMockStore();
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
