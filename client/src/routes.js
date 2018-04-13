// @flow
import React from 'react'
import { Route } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'

import { history } from './modules'
import Home from './components/pages/home.container'

const Routes = () => (
  <ConnectedRouter history={history}>
    <Route exact path="/" component={Home} />
  </ConnectedRouter>
)

export default Routes
