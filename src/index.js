import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import './index.css'
import App from './containers/App'
import SignIn from './components/SignIn/SignIn'
import Register from './components/Register/Register'
import * as serviceWorker from './serviceWorker'
import 'tachyons'

ReactDOM.render(
  <BrowserRouter>
    <Route exact path='/' component={SignIn} />
    <Route path='/home' component={App} />
    <Route path='/register' component={Register} />
  </BrowserRouter>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
