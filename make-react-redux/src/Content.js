import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ThemeSwitch from './ThemeSwitch'
import { connect } from './react-redux'


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

const mapStateToProps = state => ({themeColor: state.themeColor})

export default connect(mapStateToProps)(Content)