// @flow
import THUMBNAIL from '../components/images/mock/sarada.jpg'
import WRITER_IMG from '../components/images/mock/yoshi.jpg'
export const INITIALIZE = 'home/initialize'

export function initialize() {
  return {
    type: INITIALIZE,
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
  isNew: false,
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
    case INITIALIZE: {
      return state
    }
    default: {
      return state
    }
  }
}
