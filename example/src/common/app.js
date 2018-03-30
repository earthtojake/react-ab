import React, { Component } from 'react'
import Counter from './counter';

export default class App extends Component {
  render() {
    return <Counter
        value={this.props.num || 0}
        onIncrement={() => dispatch({ type: 'INCREMENT' })}
        onDecrement={() => dispatch({ type: 'DECREMENT' })}
    />
  }
}