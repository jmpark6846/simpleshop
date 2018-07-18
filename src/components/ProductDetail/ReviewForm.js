import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Input from '../ui-components/Form/Input/Input';
import Rating from '../ui-components/Rating/Rating';
import Header from '../ui/Header/Header';
import Textarea from '../ui-components/Form/Textarea/Textarea';
import Button from '../ui-components/Button/Button';
import Form from '../ui-components/Form/Form';
import { doReviewAdd } from '../../actions/product';
import Label from '../ui-components/Form/Label/Label';

const initialState = {
  rating:0,
  title:'',
  content:'',
  username:'',
  error:{}
}

class ReviewForm extends React.Component{
  constructor(props){
    super(props)

    this.state = initialState
  }

  handleChange = (e) => {
    const name = e.target.name.split('-')[1]
    const value = e.target.value
    this.setState({ [name] : value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const review = { 
      ...this.state,
      createDate: new Date(),
    }
    

    // 에러 처리
    let error ={} 
    Object.entries(this.state).forEach(([k,v]) => {
      // 입력 값이 빈 값이면 
      if(v === 0 || v ===  '' ){
        error[k] = '빈 칸을 작성해주세요'
      }
    })

    // 에러가 있다면
    if(Object.keys(error).length !== 0)
      this.setState({ error })
    else{
      this.setState({ ...initialState })
      this.props.addReview(review)
    }
  }

  ratingClick = ({value}) => {
    this.setState({ rating: value })
  }

  render(){
    const { show } = this.props
    const { title, content, username, rating, error } = this.state
    return (
      <Form className='review-form' onSubmit={this.handleSubmit} style={{display: show ? 'block' : 'none'}}>
        <Header header='리뷰 쓰기' />
        <Rating value={rating} onClick={this.ratingClick} input/>
        { error.rating && <Label value={error.rating} error /> }  {/* rating은 별도의 에러 라벨 추가. 나머진 기본으로 포함되어있음. */}
        <Input error={error.username} value={username} onChange={this.handleChange} label='이름' name='review-username' placeholder='이름을 적어주세요.'/>
        <Input error={error.title} value={title} onChange={this.handleChange} label='리뷰 타이틀' name='review-title' placeholder='리뷰의 제목을 적어주세요.'/>
        <Textarea error={error.content} value={content} onChange={this.handleChange} label='리뷰 내용' name='review-content' placeholder='리뷰를 적어주세요.' />
        <Button value='리뷰 작성하기' primary/>
      </Form>
    )
  }
}

ReviewForm.propTypes = {
  show: PropTypes.bool,
}

const mapDispatch = (dispatch) => ({
  addReview: (review) => dispatch(doReviewAdd(review))
})

export default connect(undefined, mapDispatch)(ReviewForm)
