// @flow
import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import store from './modules'

import Routes from './routes'
// import './index.css'
// import App from './App'
// import registerServiceWorker from './registerServiceWorker'

const root = document.getElementById('root')
if (root == null) {
  throw new Error('root doesnt exit')
}
ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  root
)
// registerServiceWorker()
