// 高阶组件实现styledComponent
import React, { Component } from 'react'
import PropTypes from 'prop-types'

class StyledComponent extends Component {
    static defaultProps = {
        styles: {},
        children: null
    }
    static propTypes = {
        styles: PropTypes.object,
        children: PropTypes.element.isRequired
    }
    render() {
        const { styles, children } = this.props;
        return <div style={styles}>{ children }</div>
    }
}

export default StyledComponent