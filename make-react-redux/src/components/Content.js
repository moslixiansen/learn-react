import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ThemeSwitch from '../containers/ThemeSwitch'

class Content extends Component {
    static propTypes = {
        themeColor: PropTypes.string
    }

    render () {
        return (
            <div>
                <div style={{color: this.props.themeColor}}>content</div>
                <ThemeSwitch />
            </div>
        )
    }
}

export default Content