// @flow
import { createStore, applyMiddleware, combineReducers } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { callApiMiddleware } from '../middlewares/callApi'
import { reducer as home } from './home'
import { reducer as article } from './article'
import { reducer as load } from './load'

import createHistory from 'history/createBrowserHistory'
import { routerReducer, routerMiddleware } from 'react-router-redux'

export const history = createHistory()

const reducers = combineReducers({
  home,
  article,
  load,
  router: routerReducer,
})

const middlewareList = [
  routerMiddleware(history),
  callApiMiddleware,
  thunk,
]
if (process.env.NODE_ENV === 'development') {
  middlewareList.push(logger)
}
const middleware = applyMiddleware(...middlewareList)

export default createStore(reducers, middleware)
