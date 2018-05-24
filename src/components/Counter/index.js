// 计数器
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './counter.css'

// 利用lifecycle的shouldComponentUpdate来优化渲染
class Counter extends Component {
    static propTypes = {
        curNum: PropTypes.number,
        max: PropTypes.number,
        min: PropTypes.number
    }
    static defaultProps = {
        curNum: 0
    }
    constructor(props) {
        super(props)
        this.state = {
            curNum: props.curNum || 0
        }
    }
    shouldComponentUpdate(curProps, nextProps) {
        return this.state.curNum !== nextProps.curNum;
    }
    render() {
        const { max, min } = this.props;
        const { curNum } = this.state;
        const btnClass = 't-counter__button';

        const maxClass = max && curNum >= max
            ? `${btnClass} is-disabled`
            : btnClass;
        const minClass = min && curNum <= min
            ? `${btnClass} is-disabled`
            : btnClass;

        return (
            <div className="t-counter__wrapper">
                <div className="t-counter__item">
                    <button
                        className={maxClass}
                        onClick={() => this.evtAddNum()}
                    >+</button>
                    <span className="t-counter__info">{curNum}</span>
                    <button
                        className={minClass}
                        onClick={() => this.evtSubNum()}
                    >-</button>
                </div>
            </div>
        )
    }
    evtAddNum() {
        const { max } = this.props;
        const { curNum } = this.state;
        if (!max || curNum < max) {
            this.setState({
                curNum: curNum + 1
            })
        }
    }
    evtSubNum() {
        const { min } = this.props;
        const { curNum } = this.state;
        if (!min || curNum > min) {
            this.setState({
                curNum: curNum - 1
            })
        }
    }
}

export default Counter