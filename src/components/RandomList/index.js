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
    evtRandList(ev) {
        const randomList = _.shuffle(_.range(20));
        const randomLen = _.random(5, 15);
        this.setState({
            list: [...randomList.slice(0, randomLen)]
        })
    }
}