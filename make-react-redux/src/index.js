
let appState = {
    title: {
        text: 'title',
        color: 'red',
    },
    content: {
        text: 'content',
        color: 'blue',
    }
}

function renderApp (newState, oldState = {}) {
    if (newState === oldState) return
    console.log('render app')
    renderTitle(newState.title, oldState.title)
    renderContent(newState.content, oldState.content)
}

function renderTitle (newTitle, oldTitle = {}) {
    if (newTitle === oldTitle) return 
    console.log('render title')
    const title = document.querySelector('#title')
    title.innerHTML = newTitle.text
    title.style.color = newTitle.color
}

function renderContent (newContent, oldContent = {}) {
    if (newContent === oldContent) return 
    console.log('render content')
    const content = document.querySelector('#content')
    content.innerHTML = newContent.text
    content.style.color = newContent.color
}

function colorReducer (state, action) {
    if (!state) {
        return appState
    }
    switch (action.type) {
        case 'UPDATE_TITLE_TEXT':
            return {
                ...state,
                title: {
                    ...state.title,
                    text: action.text,
                }  
            }
        case 'UPDATE_TITLE_COLOR':
            return {
                ...state,
                title: {
                    ...state.title,
                    color: action.color,
                }
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
        listeners.forEach( listener => listener() )
    }
    dispatch({})

    return { getState, subscribe, dispatch }
}

renderApp(appState)

const store = createStore(colorReducer)
let oldState  = store.getState()
store.subscribe( () => {
    renderApp(store.getState(), oldState)
    oldState = store.getState()
})
store.dispatch({type: 'UPDATE_TITLE_COLOR', color: 'green'})

store.dispatch({
    type: 'UPDATE_TITLE_TEXT',
    text: 'new--title'
})
