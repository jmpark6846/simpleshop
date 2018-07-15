import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {Cart} from '../../components/ui/Cart/Cart';
import ConnectedCartItem from '../../components/ui/Cart/CartItem';

Enzyme.configure({ adapter: new Adapter()})

describe('Cart', ()=> {
  it('cartItems를 렌더링', () => {
    const cartItems = { 
      0 : { id:0, name: 'bag1', price: '500', imgs:['/src/images/bag1.jpg'], },
      1 : { id:1, name: 'bag2', price: '400', imgs:['/src/images/bag2.jpg'], },
      2 : { id:2, name: 'bag3', price: '600', imgs:['/src/images/bag3.jpg'], },
    }
    const wrapper = shallow(<Cart cartItems={cartItems} />)
    expect(wrapper.find(ConnectedCartItem).length).toBe(5) // 카트 아이템 3개 + 총금액 div 1개 + 구매 버튼 div 1개
  })
})