// @flow
export const LOAD_START = 'load_start'
export const LOAD_DONE = 'load_done'

export const loadStart = () => ({
  type: LOAD_START,
})

export const loadDone = () => ({
  type: LOAD_DONE,
})

const initialState = {
  isLoading: false
}

export type LoadAction =
  | $ReturnType <typeof loadStart>
  | $ReturnType <typeof loadDone>

type LoadState = {
  isLoading: boolean,
}

export const reducer = (state: LoadState = initialState, action: LoadAction) => {
  switch (action.type) {
    case LOAD_START: {
      return { ...state, isLoading: true }
    }
    case LOAD_DONE: {
      return { ...state, isLoading: false }
    }
    default: {
      return state
    }
  }
}
