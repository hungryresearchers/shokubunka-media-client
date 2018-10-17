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
import scrollToTop from './components/atoms/scroll-to-top'

const Routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route exact path="/" component={scrollToTop(Home)} />
      <Route exact path="/article/:id"  component={scrollToTop(Article)} />
      <Route component={() => (<div>404</div>)} />
    </Switch>
  </ConnectedRouter>
)

export default Routes
