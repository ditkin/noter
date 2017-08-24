import { combineReducers } from 'redux'

const reducer = (state = { notes: [], isFetching: true }, action) => {
    switch (action.type) {
        case 'REQUEST_NOTES':
                console.log('hit REQUEST_NOTES');
                return { notes: [], isFetching: true };

        case 'RECEIVE_NOTES':
                console.log('hit RECEIVE_NOTES');
                return { notes: action.notes, isFetching: false };

        default:
                console.log('hit default ' + action.type);
                return state;
    }
};

export default reducer

