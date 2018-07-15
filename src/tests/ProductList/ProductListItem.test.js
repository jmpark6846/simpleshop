import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { ProductListItem } from '../../components/ProductList/ProductListItem'

Enzyme.configure({ adapter : new Adapter() })

describe('ProductListItem', ()=> {
  const product = {
    id:0,
    name: 'bag',
    price: 500,
    imgs:['/src/images/bag.jpg'],
  }
  

  it('props로 받은 product를 렌더링 한다.', () => {
   const wrapper = shallow(<ProductListItem product={product} />)

    expect(wrapper.find('.product-img').props()).toEqual({className: 'product-img', style:{backgroundImage: `url(${product.imgs[0]})`}})
  })

})