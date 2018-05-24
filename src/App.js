import React, { Component } from 'react';

import Counter from './components/Counter'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter
          min={1}
          curNum={2}
          max={4}
          ref="counter"
        />
      </div>
    );
  }
  componentDidMount() {
    // console.log(this.refs.counter.state)
  }
}

export default App;
