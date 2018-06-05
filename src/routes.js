// @flow
import React from 'react'
import {
  Route,
  Switch
} from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'

import { history } from './modules'
import Home from './components/pages/home/index.container'

const Routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/article/:id" component={Home} />
      <Route component={() => (<div>404</div>)} />
    </Switch>
  </ConnectedRouter>
)

export default Routes
