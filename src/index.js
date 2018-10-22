// @flow
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import store from './modules'

import App from './routes'
import './components/styles/common.css'
import './components/styles/font-family.css'

const root = document.getElementById('root')
if (root == null) {
  throw new Error('root doesnt exit')
}
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
)
