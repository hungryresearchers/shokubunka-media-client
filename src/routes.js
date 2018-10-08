// @flow
import React from 'react'
import {
  Route,
  Switch
} from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'

import { history } from './modules'
import Home from './components/pages/home/index.container'
import Article from './components/pages/article/index.container'

function handleLocationChange(prevState, nextState) {
  console.log('hoge')
  if (nextState.location.action !== 'POP') {
    window.scrollTo(0, 0)
  }
}

const Routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route exact path="/" component={Home}  onChange={handleLocationChange}  />
      <Route exact path="/article/:id"  component={Article}  onChange={handleLocationChange} />
      <Route component={() => (<div>404</div>)} />
    </Switch>
  </ConnectedRouter>
)

export default Routes
