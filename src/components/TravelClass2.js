import React, { Component } from 'react'
import Price from './Price'

class TravelClass2 extends Component {
  constructor() {
    super()
    this.state = { price: 500 }
  }

  changePrice() {
    this.setState({
      price: 300,
    })
  }
  render() {
    return (
      <div>
        <p>Changed price: {this.state.price}</p>
        <button onClick={() => this.changePrice()}>Change Price!</button>
      </div>
    )
  }
}

export default TravelClass2
