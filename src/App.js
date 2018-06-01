import React, { Component } from 'react';

import RandomList from './components/RandomList'

import 'thanos/dist/main.css'
import { TButton, TInput } from 'thanos'

import 'thanos/dist/SearchInput/SearchInput.css'
import 'thanos/dist/SearchCity/SearchCity.css'
import SearchInput from 'thanos/dist/SearchInput/SearchInput'
import SearchCity from 'thanos/dist/SearchCity/SearchCity'

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchInput />
        <SearchCity />
        <RandomList />
        <p>{'bottom'}</p>
      </div>
    );
  }
  componentDidMount() {
    // console.log(this.refs.counter.state)
  }
}

export default App;
