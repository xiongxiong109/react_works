// 随机列表
import React, { Component } from 'react'
import _ from 'lodash'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import './randomList.css'
import Store from 'thanos/dist/store'

export default class RandomList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [1,2,3,4,5]
        }
    }
    render() {
        const { list } = this.state;
        // const evtRandList = this.evtRandList;
        return (
            <div className="rand__wrapper">
                <button
                    className="rand__btn"
                    onClick={ev => this.evtRandList(ev)}
                >生成随机列表</button>
                <TransitionGroup
                    className="rand__list"
                    component="ul"
                >
                    {list.map(item =>(
                        <CSSTransition
                            key={item}
                            timeout={300}
                            classNames="flash"
                        >
                            <li className="rand__list--item">List {item}</li>
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            </div>
        )
    }
    componentDidMount() {
        this.store = new Store({
            key: 'THANOS_RANDOM_KEY'
        })
        if (this.store.isExists()) {
            this.setState({
                list: this.store.get().list
            })
        }
    }
    evtRandList(ev) {
        const randomList = _.shuffle(_.range(20));
        const randomLen = _.random(5, 15);
        const rst = [...randomList.slice(0, randomLen)]
        this.setState({
            list: rst
        })
        this.store.set({
            list: rst
        })
    }
}