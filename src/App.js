import React, { Component } from 'react';
import Modal from './components.base/Modal/modal'
import RandomList from './components/RandomList'

import 'thanos/dist/main.css'
import 'thanos/dist/SearchInput/style.css'
import { SearchCity } from 'thanos'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: {
        isShow: false,
        title: '',
        content: ''
      }
    }
  }
  render() {
    const { modal } = this.state;
    return (
      <div className="App">
        <SearchCity />
        <RandomList />
        <button onClick={() => this.showSth()}>showModal</button>
        <Modal {...modal} />
      </div>
    );
  }
  showSth() {
    const _view = this;
    this.showModal('hello world', 'bear xiong', {
      onClickOutside(ev) {
        _view.setState({
          modal: Object.assign({}, _view.state.modal, {
            isShow: false
          })
        })
      }
    })
  }
  showModal(content, title, opts = {}) {
    this.setState({
      modal: Object.assign({}, this.state.modal, {
        isShow: true,
        title,
        content,
        ...opts
      })
    })
  }
}

export default App;
