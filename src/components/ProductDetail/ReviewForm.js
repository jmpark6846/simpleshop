import React from 'react'
import PropTypes from 'prop-types'
import Input from '../ui-components/Form/Input/Input';
import Rating from '../ui-components/Rating/Rating';
import Header from '../ui/Header/Header';
import Textarea from '../ui-components/Form/Textarea/Textarea';
import Button from '../ui-components/Button/Button';
import Form from '../ui-components/Form/Form';

const ReviewForm = ({show}) => {
  return (
    <Form className='review-form' style={{display: show ? 'block' : 'none'}}>
      <Header header='리뷰 쓰기' />
      <Rating input/>
      <Input label='이름' name='review-username' placeholder='이름을 적어주세요.'/>
      <Input label='리뷰 타이틀' name='review-title' placeholder='리뷰의 제목을 적어주세요.'/>
      <Textarea label='리뷰 내용' name='review-content' placeholder='리뷰를 적어주세요.'/>
      <Button value='리뷰 작성하기' primary/>
    </Form>
  )
}

ReviewForm.propTypes = {
  show: PropTypes.bool,
}

export default ReviewForm
