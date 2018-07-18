import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'
import { Cart } from '../../components/ui/Cart/Cart';
import ConnectedCartItem from '../../components/ui/Cart/CartItem';
import store from "../../store";

Enzyme.configure({ adapter: new Adapter()})

describe('Cart', ()=> {
  const cartItems = { 
    0 : { id:0, name: 'bag1', price: 500, ea:1, img:'/src/images/bag1.jpg', },
    1 : { id:1, name: 'bag2', price: 400, ea:2, img:'/src/images/bag2.jpg', },
    2 : { id:2, name: 'bag3', price: 600, ea:3, img:'/src/images/bag3.jpg', },
  }
  
  it('Cart snapshot test', () =>{
    const tree = renderer.create(<Provider store={store}><Cart cartItems={cartItems} /></Provider>).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('카트 항목에 맞게 카트 리스트를 렌더링', () => {  
    const wrapper = shallow(<Cart cartItems={cartItems} />)
    expect(wrapper.find(ConnectedCartItem).length).toBe(5) // 카트 아이템 3개 + 총금액 div 1개 + 구매 버튼 div 1개
  })
})