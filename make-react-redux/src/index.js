
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Header from './Header'
import Content from './Content'
import { Provider } from './react-redux'


function themeReducer(state, action) {
    if (!state) {
        return {
            themeColor: 'blue',
        }
    }

    switch (action.type) {
        case 'SWITCH_THEME_COLOR':
            return {
                ...state,
                themeColor: action.color,
            }
            default:
                return state
    }
}

function createStore (reducer) {
    let state = null
    const listeners = []
    const getState = () => state
    const subscribe = (listener) => listeners.push(listener)
    const dispatch = (action) => {
        state = reducer(state, action)
        listeners.forEach(listener => listener())
    }
    dispatch({})

    return { getState, subscribe, dispatch }
}



const store = createStore(themeReducer)

class Index extends Component {
    render () {
        return (
            <div>
                <Header />
                <Content />
            </div>
        )
    }
}

ReactDOM.render(
    <Provider store = { store }>
        <Index />
    </Provider>,
    document.getElementById('root')
)