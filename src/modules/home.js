// @flow
import { endpoints } from '../middlewares/callApi'

import THUMBNAIL from '../components/images/mock/sarada.jpg'
import WRITER_IMG from '../components/images/mock/yoshi.jpg'

export const INITIALIZED = 'home/initialize'
export const REQUEST_INITIALIZED = 'home/request_initialze'
export const SUCCESS_INIALIZE = 'home/success_initialize'

export function initialize() {
  return {
    type: INITIALIZED,
    endpoint: endpoints.HOME_INITIALIZED,
  }
}

export type HomeAction =
  | $ReturnType <typeof initialize>

export const articleProps = () => ({
  title: '絶品ハンバーグを食べに行ったら天国だった話',
  id: `${Math.floor(Math.random() * 100 % 19)}`,
  tags: [
    'ハンバーグ',
    '洋食',
  ],
  releasedDate: '2018 7 14',
  isNew: Math.floor(Math.random() * 100) % 2 || false,
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
  articleProps(),
  articleProps(),
]

const initialState = {
  articles: articlesProps
}

export type HomeState = {}

export const reducer = (state: HomeState = initialState, action: HomeAction) => {
  switch (action.type) {
    case INITIALIZED: {
      return state
    }
    default: {
      return state
    }
  }
}
