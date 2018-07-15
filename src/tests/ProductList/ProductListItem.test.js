import React from 'react'
import Enzyme, { shallow } from 'enzyme'

import Adapter from 'enzyme-adapter-react-16'
import renderer from 'react-test-renderer'

describe('ProductListItem', ()=> {
  it('props로 받은 product를 렌더링 한다.', () => {
    const wrapper = shallow(<ProductListItem />)
    const product = {
      id:0,
      name: 'bag',
      price: '500',
      img:'/src/images/bag.jpg',
    }
    wrapper.setProps({ product })
    expect(wrapper.find('.product-img'))
  })
})