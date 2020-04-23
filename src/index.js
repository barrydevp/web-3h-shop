import React from 'react'
import ReactDOM from 'react-dom'
import {Router} from 'react-router-dom'
import getHistory from './store/getHistory'
import './scss/app.scss'
import App from './App'
// import * as serviceWorker from './serviceWorker'

ReactDOM.render(
    <React.StrictMode>
        <Router history={getHistory()}>
            <App/>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister()
