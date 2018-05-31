import React, { Component } from 'react';
import StyledComponent from './components.wrapper/styledComponent'
// 全量引入
import 'thanos/dist/main.css'
import { TButton, TInput } from 'thanos'
import 'thanos/dist/SearchInput/SearchInput.css'
import SearchInput from 'thanos/dist/SearchInput/SearchInput'
// 按需引入
// import TButton from 'thanos/dist/TButton/TButton';
// import TInput from 'thanos/dist/TInput/TInput';

import Counter from './components/Counter'

class App extends Component {
  render() {
    return (
      <div className="App">
        <StyledComponent
          styles={
            {
              backgroundColor: '#ccc'
            }
          }
        >
          <Counter
            min={1}
            curNum={2}
            max={4}
            ref="counter"
          />
        </StyledComponent>
        <TButton>button</TButton>
        <TInput />
        <SearchInput placeholder="hello bear xiong"/>
      </div>
    );
  }
  componentDidMount() {
    // console.log(this.refs.counter.state)
  }
}

export default App;
