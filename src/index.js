import React from 'react'
import ReactDOM from 'react-dom'
import './app/css/animation.css'
import './app/css/form.css'
import './app/css/general.css'
import './app/css/reset.css'
import './app/css/style-admin.css'
import './app/css/style-error.css'
import './app/css/style-home.css'
import './app/css/style-sale.css'
import './app/css/style-shop.css'
import './app/css/style-sign.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
