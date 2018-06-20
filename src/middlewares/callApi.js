// @flow
import 'whatwg-fetch'
import type { Store } from 'redux'
import { loadStart, loadDone } from '../modules/load'

export const API_ROOT = (process.env.NODE_ENV === 'development') ? '' : ''

export const endpoints = {
  HOME_INITIALIZE: 'https://api.github.com/users/yasuno0327',
  ARTICLE_INITIALIZE: 'article_initialize'
}

function checkStatus({ status }: { status: number }) {
  return (status === 200)
}

function requestResponse(type: string) {
  return { type }
}

function successResponse(type: string, response: Object) {
  return {
    type,
    response,
  }
}

function failureResponse(type: string, error: ?Object) {
  return {
    type,
    error,
  }
}

const requestActionType = (type: string) => `${type}_REQUEST`

const successActionType = (type: string) => `${type}_SUCCESS`

const failureActionType = (type: string) => `${type}_FAILURE`

type Next = (action: Function) => void

// $FlowFixMe (storeがany型なのを治す)
export const callApiMiddleware = (store: any) => (next: Next) => async(action: any) => {
  const ret = next(action)

  const { endpoint } = action
  if (endpoint != null && typeof endpoint === 'string') {
    const dispatch = store.dispatch.bind(store)
    const ACTION_TYPE = action.type

    dispatch(requestResponse(requestActionType(ACTION_TYPE)))
    dispatch(loadStart())

    const { params } = action
    const response = await fetch(
      API_ROOT + endpoint,
      {
        method: 'GET',
        // github apiをモックで叩くためにgetにしてるだけ
        // method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
      }
    )

    dispatch(loadDone())
    const apiCallIsSucceed = checkStatus(response)
    const json = await response.json()
    if (apiCallIsSucceed) {
      dispatch(successResponse(successActionType(ACTION_TYPE), json))
    }
    else {
      dispatch(failureResponse(failureActionType(ACTION_TYPE), json))
    }
  }
  return ret
}
