import React, {Component} from 'react'
import PropTypes from 'prop-types'

class ThemeSwitch extends Component {
    static propTypes = {
        themeColor: PropTypes.string,
        onSwitch: PropTypes.func,
    }

    handleSwitchColor (color) {
        if (this.props.onSwitch) {
            this.props.onSwitch(color)
        }
    }

    render () {
        return (
            <div>
                <button style={{color: this.props.themeColor}} onClick={this.handleSwitchColor.bind(this, 'red')}>red</button>
                <button style={{color: this.props.themeColor}} onClick={this.handleSwitchColor.bind(this, 'blue')}>blue</button>
            </div>
        )
    }
}

export default ThemeSwitch