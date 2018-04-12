// @flow

export const INITIALIZE = 'home/initialize'

export function initialize() {
  return {
    type: INITIALIZE,
  }
}

export type HomeAction =
  | $ReturnType <typeof initialize>

const initialState = {}

export type HomeState = {}

export const reducer = (state: HomeState = initialState, action: HomeAction) => {
  switch (action.type) {
    case INITIALIZE: {
      return state
    }
    default: {
      return state
    }
  }
}
