import { connect } from '../react-redux'
import ThemeSwitch from '../components/ThemeSwitch'


const mapStateToProps = state => ({themeColor: state.themeColor})

const mapDispatchToProps = dispatch => ({
        onSwitch: (color) => {
             dispatch({
                type: 'SWITCH_THEME_COLOR',
                color: color
            })
            
        }
    }) 


export default connect(mapStateToProps, mapDispatchToProps)(ThemeSwitch)