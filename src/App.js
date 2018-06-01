import React, { Component } from 'react';

import RandomList from './components/RandomList'

import 'thanos/dist/main.css'
// import { TButton, TInput } from 'thanos'

import 'thanos/dist/SearchInput/SearchInput.css'
import SearchInput from 'thanos/dist/SearchInput/SearchInput'

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchInput />
        <RandomList />
      </div>
    );
  }
  componentDidMount() {
    // console.log(this.refs.counter.state)
  }
}

export default App;
