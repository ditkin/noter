import React from 'react';

import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import App from './containers/App'
import notes from './reducers'

import './styles/index.css';

//import registerServiceWorker from './registerServiceWorker';
//import thunk from 'redux-thunk'

const store = createStore(notes)

render((
    <Provider store={store}>
        <App />
    </Provider>
    ),
    document.getElementById('root')
)
