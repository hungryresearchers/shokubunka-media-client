// @flow
import { endpoints, successResponse, failureResponse } from '../middlewares/callApi'

import THUMBNAIL from '../components/images/mock/sarada.jpg'
import WRITER_IMG from '../components/images/mock/yoshi.jpg'

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

export const articleProps = () => ({
  title: '絶品ハンバーグを食べに行ったら天国だった話',
  id: `${Math.floor(Math.random() * 100 % 50)}`,
  tags: [
    'ハンバーグ',
    '洋食',
  ],
  releasedDate: new Date(),
  isNew: Math.floor(Math.random() * 100) % 2 || false,
  // isNew: true,
  writerName: 'Yoshi Kazuya',
  imgUrl: WRITER_IMG,
  thumbUrl: THUMBNAIL,
})

const articlesProps = [
  articleProps(),
  articleProps(),
  articleProps(),
  articleProps(),
  articleProps(),
]

const initialState = {
  articles: articlesProps
}

function whenSuccessInitialize(state: HomeState, response: Array<any>) {
  const today = new Date()
  const articles = response.map(({ post: { title, tags, writer, thumbnail, id, releasedDate } }) => ({
    title,
    tags,
    id,
    releasedDate,
    thumbUrl: thumbnail,
    imgUrl: writer.imgUrl,
    writerName: writer.name,
    isNew: new Date(releasedDate).getDate() - today.getDate() < 3
  }))
  // return { ...state, articles }
  return state
}

export type HomeState = {}

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
