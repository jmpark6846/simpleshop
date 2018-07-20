import React from 'react'
import { BrowserRouter as Router }    from 'react-router-dom';

import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { Cart } from '../../components/ui/Cart/Cart';
import ConnectedCartItem from '../../components/ui/Cart/CartItem';
import { cart } from '../../reducers/cart';

Enzyme.configure({ adapter: new Adapter()})

describe('Cart', ()=> {
  let cartItems = { 
    0 : { id:0, name: 'bag1', price: 500, ea:1, img:'/src/images/bag1.jpg', },
    1 : { id:1, name: 'bag2', price: 400, ea:2, img:'/src/images/bag2.jpg', },
    2 : { id:2, name: 'bag3', price: 600, ea:3, img:'/src/images/bag3.jpg', },
  }

  it('Cart snapshot test', () =>{
    const store = createStore(cart)

    const tree = renderer.create(<Provider store={store}><Router><Cart cartItems={cartItems} /></Router></Provider>).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('카트를 렌더링 한다.', ()=>{
    const wrapper = shallow(<Cart />)
    expect(wrapper.length).toBe(1)
  })

  it('props로 cartItems이 입력되면 수에 맞게 cartItems 렌더링', () => {  
    const wrapper = shallow(<Cart cartItems={cartItems} />)
    expect(wrapper.find(ConnectedCartItem).length).toBe(3)
  })

  it('props로 cartItems가 undefiend이면 div.cart-empty-message 출력', () => {
    const wrapper = shallow(<Cart cartItems={undefined} />)
    expect(wrapper.find('.cart-empty-message').exists()).toBe(true)
  })
})