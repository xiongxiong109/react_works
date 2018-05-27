import React, { Component } from 'react';
// 全量引入
import 'thanos/dist/main.css'
import { TButton } from 'thanos'
// 按需引入
// import TButton from 'thanos/dist/TButton/TButton';

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
        <TButton />
      </div>
    );
  }
  componentDidMount() {
    // console.log(this.refs.counter.state)
  }
}

export default App;
