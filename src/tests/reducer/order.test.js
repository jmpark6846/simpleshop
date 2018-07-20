import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { order } from '../../reducers/order';
import { ORDER_ADD } from '../../constants/actionTypes';

Enzyme.configure({ adapter: new Adapter() })

describe('order reducer', ()=> {
  it('ORDER_ADD: 빈 오더에 새로운 오더아이템 추가', () => {
    const beforeState = { orderItems: {}, totalPrice: 0 }
    const orderItems = { 0: {id:0, name:'haha', price:100, ea:1} }
    const action = { type: ORDER_ADD, orderItems: orderItems }
    const afterState = order(beforeState, action)

    expect(afterState).toEqual({ orderItems, totalPrice: 100})
  })
})