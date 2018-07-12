import React from 'react'
import PropTypes from 'prop-types'
import './NumberSelector.css'

class NumberSelector extends React.Component{

  handleChange = (e) => {
    const isNumber = e.target.value.split('').every(n => Number.isInteger(parseInt(n)))
    if(isNumber && !isNaN(parseInt(e.target.value))){
      let number = parseInt(e.target.value)

      if( number < 1 || number > 999)
        return false
     
      this.props.onChange(number)
    }
  }

  handleDecrement = () => {
    if(this.props.number > 1)  
      this.props.onChange(this.props.number-1)
  }

  handleIncrement = () => {
    this.props.onChange(this.props.number+1)
  }

  render(){
    
    return (
      <div className='number-selector'>
        <button className='decrement' onClick={this.handleDecrement}>-</button>
        <input className='number' name='number' onChange={this.handleChange} value={this.props.number} />
        <button className='increment' onClick={this.handleIncrement}>+</button>  
      </div>
    )
  }
}



export default NumberSelector
