import { combineReducers } from 'redux'

const selectedNotebook = (state = 'default', action) => {
    switch(action.type) {
        case 'SELECTED_NOTEBOOK':
            return action.notebook
        default:
            return state
    }
}

const notesReducer = (
    state = {
        notes: [],
        isFetching: false
    },
    action
) => {
    switch (action.type) {
        case 'REQUEST_NOTES':
            console.log('hit REQUEST_NOTES')
            return Object.assign({}, state, {
                isFetching: true,
            })
        case 'RECEIVE_NOTES':
            console.log('hit RECEIVE_NOTES')
            return Object.assign({}, state, {
                isFetching: false,
                notes: action.notes,
                lastUpdated: action.receivedAt,
            })
        default:
            console.log('hit default ' + action.type)
            return state
    }
};

const notesByNotebook = (state = {}, action) => {
    switch (action.type) {
        case 'REQUEST_NOTES':
        case 'RECEIVE_NOTES':
            console.log('hit RECEIVE_NOTES')
            return Object.assign({}, state, {
                [action.notebook]: notesReducer(state[action.notebook]),
                action
            })

        default:
            console.log('hit default ' + action.type);
            return state;
    }
};

const notes = (state = { notes: [{ text:'hi',title:'first',notebook:'mcja' }] }, action) => {
    switch (action.type) {
        case 'ADD_NOTE':
            console.log('hit ADD_NOTE')
            return {
                notes: [...state.notes, {
                    text: action.text,
                    title: action.title,
                    notebook: action.notebook,
                }],
            }
        case 'SHOW_NOTES':
            console.log('hit SHOW_NOTES')
            return state
        default:
            console.log('hit default ' + action.type)
            return state
    }
}


const rootReducer = combineReducers({
    notesByNotebook,
    selectedNotebook,
})

export default notes

