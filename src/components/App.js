import React, { Component } from 'react'
import './App.css'
import img from './img.png'

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        simpleshop v1.0
        <img src={img} />
      </div>
    )
  }
}
