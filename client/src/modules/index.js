// @flow
import { createStore, applyMiddleware, combineReducers } from 'redux'
import logger from 'redux-logger'

import { reducer as home } from './home'

const reducers = combineReducers({
  home
})

const middlewareList = []
if (process.env.NODE_ENV === 'development') {
  middlewareList.push(logger)
}
const middleware = applyMiddleware(...middlewareList)

export default createStore(reducers, middleware)
