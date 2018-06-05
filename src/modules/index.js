// @flow
import { createStore, applyMiddleware, combineReducers } from 'redux'
import logger from 'redux-logger'
import { reducer as home } from './home'

import createHistory from 'history/createBrowserHistory'
import { routerReducer, routerMiddleware } from 'react-router-redux'

export const history = createHistory()

const reducers = combineReducers({
  home,
  router: routerReducer,
})

const middlewareList = [routerMiddleware(history)]
if (process.env.NODE_ENV === 'development') {
  middlewareList.push(logger)
}
const middleware = applyMiddleware(...middlewareList)

export default createStore(reducers, middleware)
