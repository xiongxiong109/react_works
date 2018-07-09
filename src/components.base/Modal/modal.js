import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { createPortal } from 'react-dom'
import './modal.css'

export default class Modal extends Component {
    static propTypes = {
        isShow: PropTypes.bool,
        title: PropTypes.string,
        content: PropTypes.string,
        onClickOutside: PropTypes.func
    }
    static defaultProps = {
        isShow: false,
        title: '我是标题',
        content: '',
        onClickOutside: null
    }
    constructor(props) {
        super(props)
        this.state = {
            root: null
        }
    }
    render() {
        
        const {
            isShow,
            title,
            content,
            onClickOutside
        } = this.props;

        return createPortal(
            <div
                className="app__modal--wrapper"
                style={
                    {
                        display: `${isShow ? 'block': 'none'}`
                    }
                }
            >
                <div className="app__modal--layer" onClick={onClickOutside}></div>
                <div className="app__modal--container">
                    <div className="app__modal--title">{ title }</div>
                    <div className="app__modal--content">{ content }</div>
                </div>
            </div>,
        this.state.root)
    }
    componentDidMount() {
        this.setState({
            root: document.body
        })
    }
}