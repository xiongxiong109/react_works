import React, { Component } from 'react';
import StyledComponent from './components.wrapper/styledComponent'
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
      </div>
    );
  }
  componentDidMount() {
    // console.log(this.refs.counter.state)
  }
}

export default App;
