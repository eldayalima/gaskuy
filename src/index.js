import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import 'bootstrap/dist/css/bootstrap.min.css'

// MEMBUAT STORE DENGAN REDUCERS YANG SUDAH DI BUAT
import {createStore,applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
// Provider, memberikan akses komponen APP beserta child nya ke redux store
import {Provider} from 'react-redux'
import reducers from './reducers/index'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let _store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
    <Provider store={_store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)