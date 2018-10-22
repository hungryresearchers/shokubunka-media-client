// @flow
import { endpoints, successResponse, failureResponse } from '../middlewares/callApi'

export const INITIALIZED = 'home/initialize'
export const REQUEST_INITIALIZED = 'home/initialze_request'
export const SUCCESS_INIALIZE = 'home/initialize_success'

export function initialize() {
  return {
    type: INITIALIZED,
    endpoint: endpoints.HOME_INITIALIZE,
  }
}

export type HomeAction =
  | $ReturnType <typeof initialize>
  | $ReturnType <typeof successResponse>
  | $ReturnType <typeof failureResponse>

const articlesProps = []

const initialState = {
  articles: articlesProps
}

export type HomeState = {}

function whenSuccessInitialize(state: HomeState, response: Array<any>) {
  const today = new Date()
  const articles = response.map(({ post: { title, tags, writer, thumbnail, id, releasedDate, shopId, content } }) => ({
    title,
    content,
    tags,
    id,
    releasedDate,
    thumbUrl: thumbnail,
    imgUrl: writer.imgUrl,
    writerName: writer.name,
    isNew: today.getDate() - new Date(releasedDate).getDate() < 3,
    shopId: parseInt(shopId, 10),
  }))
  return { ...state, articles }
}

export const reducer = (state: HomeState = initialState, action: HomeAction) => {
  switch (action.type) {
    case INITIALIZED: {
      return state
    }
    case SUCCESS_INIALIZE: {
      return whenSuccessInitialize(state, action.response)
    }
    default: {
      return state
    }
  }
}
