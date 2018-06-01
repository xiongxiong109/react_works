// 随机列表
import React, { Component } from 'react'
import _ from 'lodash'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import './randomList.css'

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
                <ul className="rand__list">
                    <TransitionGroup>
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
                </ul>
            </div>
        )
    }
    evtRandList(ev) {
        const randomList = _.shuffle(_.range(10));
        const randomLen = _.random(3, 8);
        this.setState({
            list: [...randomList.slice(0, randomLen)]
        })
    }
}