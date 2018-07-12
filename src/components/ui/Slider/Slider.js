import React from 'react'
import PropTypes from 'prop-types'
import './Slider.css'
import Button from '../Button';
import Image from '../../ui-components/Image';
import Slide from './Slide';
import LightBox from './LightBox';

class slider extends React.Component{
  constructor(props){
    super(props)

    this.state={
      showIndex: 0,
      showLigthbox: false,
    }
  }

  renderSlides = () => {
    const { showIndex } = this.state
    const { imgs } = this.props
    return imgs.map((img,i) => <Slide toggleZoom={this.toggleZoom} show={showIndex===i} key={i} img={img} />)
  }
  
  slideLeft = () => {
    const { showIndex } = this.state
    const nextIndex = showIndex - 1 < 0 ? this.props.imgs.length - 1 : showIndex - 1 
    this.setState({ showIndex: nextIndex })
  }

  slideRight = () => {
    const { showIndex } = this.state
    const nextIndex = showIndex + 1 > this.props.imgs.length-1 ? 0 : showIndex + 1 
    this.setState({ showIndex: nextIndex })
  } 

  toggleZoom = () => {
    this.setState({ showLigthbox : !this.state.showLigthbox })
  }

  render(){
    return (
      <div className='slider'>
        <ul className='slide-group'>
          { this.renderSlides() }      
        </ul>
        <Button className='leftArrow' icon='fas fa-angle-left' onClick={this.slideLeft}   />
        <Button className='rightArrow' icon='fas fa-angle-right' onClick={this.slideRight} />
        <LightBox toggleZoom={this.toggleZoom} show={this.state.showLigthbox} img={this.props.imgs[this.state.showIndex]} />
      </div>
    )
  }
  
}

slider.propTypes = {
  imgs: PropTypes.array
}

export default slider
