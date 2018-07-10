import React from 'react'
import PropTypes from 'prop-types'
import './NumberSelector.css'

class NumberSelector extends React.Component{
  constructor(props){
    super(props)

    this.state={
      number: this.props.number ? this.props.number : 0
    }
  }

  handleChange = (e) => {
    const isNumber = e.target.value.split('').every(n => Number.isInteger(parseInt(n)))

    if(isNumber){
      let number = parseInt(e.target.value)

      if( number < 0 || number > 999)
        return false
     
      this.setState({ number })
    }
  }

  handleDecrement = () => {
    const { number } = this.state
    if(number > 0)  
      this.setState({number: number-1})
  }

  handleIncrement = () => {
    this.setState({number: this.state.number+1})
  }

  render(){
    return (
      <div className='number-selector'>
        <button className='decrement' onClick={this.handleDecrement}>-</button>
        <input className='number' name='number' onChange={this.handleChange} value={this.state.number} />
        <button className='increment' onClick={this.handleIncrement}>+</button>  
      </div>
    )
  }
}

NumberSelector.propTypes = {
  number: PropTypes.number
}

export default NumberSelector
