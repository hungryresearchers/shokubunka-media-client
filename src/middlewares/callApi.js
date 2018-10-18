// @flow
import 'whatwg-fetch'
import type { Store } from 'redux'
import { loadStart, loadDone } from '../modules/load'

export const API_ROOT = (process.env.NODE_ENV === 'development')
  ? process.env.REACT_APP_DEV_API_ROOT
  : process.env.REACT_APP_PROD_API_ROOT

export const endpoints = {
  HOME_INITIALIZE: '/wp-json/wp/v2/articles',
  GET_ARTICLE: (id: number) => `/wp-json/wp/v2/articles/${id}`,
  GET_SHOP_INFO: (id: number) => `/wp-json/wp/v2/posts/${id}`,
}

function checkStatus({ status }: { status: number }) {
  return (status === 200)
}

function requestResponse(type: string) {
  return { type }
}

export function successResponse(type: string, response: Object) {
  return {
    type,
    response,
  }
}

export function failureResponse(type: string, error: ?Object) {
  return {
    type,
    error,
  }
}

const requestActionType = (type: string) => `${type}_request`

const successActionType = (type: string) => `${type}_success`

const failureActionType = (type: string) => `${type}_failure`

type Next = (action: Function) => void

// $FlowFixMe (storeがany型なのを治す)
export const callApiMiddleware = (store: Store) => (next: Next) => async(action: any) => {
  const ret = next(action)

  const { endpoint } = action
  if (endpoint != null) {
    const dispatch = store.dispatch.bind(store)
    const ACTION_TYPE = action.type

    dispatch(requestResponse(requestActionType(ACTION_TYPE)))
    dispatch(loadStart())

    // const { params } = action
    const response = await fetch(
      API_ROOT + endpoint,
      {
        method: 'GET',
        // github apiをモックで叩くためにgetにしてるだけ
        // method: 'POST',
        headers: {
          'Content-Type': 'application/json;'
        },
        // body: JSON.stringify(params)
      }
    )

    dispatch(loadDone())
    const apiCallIsSucceed = checkStatus(response)
    const json = await response.json()
    console.log(json)
    if (apiCallIsSucceed) {
      dispatch(successResponse(successActionType(ACTION_TYPE), json))
    }
    else {
      dispatch(failureResponse(failureActionType(ACTION_TYPE), json))
    }
  }
  return ret
}
