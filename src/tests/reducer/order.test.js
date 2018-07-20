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

  it('ORDER_ADD: OrderItem이 있는 Order에 겹치는 OrderItems 추가', () => {
    const orderItems = { 0: {id:0, name:'haha', price:100, ea:1} }
    const beforeState = { orderItems: orderItems, totalPrice: 100 }
    const action = { type: ORDER_ADD, orderItems: { 0: {id:0, name:'haha', price: 100, ea: 5 }, 2: { id:2, name:'omg', price:200, ea:2}}}
    const afterState = order(beforeState, action)
    
    expect(afterState).toEqual({ 
      orderItems: { 0: {id:0, name:'haha', price: 100, ea: 6 }, 2: { id:2, name:'omg', price:200, ea:2}},
      totalPrice: 1000
    })
  })
})