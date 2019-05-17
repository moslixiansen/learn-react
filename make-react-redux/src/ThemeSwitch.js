import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { connect } from './react-redux'

class ThemeSwitch extends Component {
    static propTypes = {
        themeColor: PropTypes.string,
        onSwitch: PropTypes.func,
    }

    handleSwitchColor (color) {
        debugger
        if (this.props.onSwitch) {
            debugger
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

const mapStateToProps = state => ({themeColor: state.themeColor})

const mapDispatchToProps = dispatch => ({
        onSwitch: (color) => {
            debugger
             dispatch({
                type: 'SWITCH_THEME_COLOR',
                color: color
            })
            
        }
    }) 


export default connect(mapStateToProps, mapDispatchToProps)(ThemeSwitch)