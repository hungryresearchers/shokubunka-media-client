// @flow
import WRITER_IMG from '../components/images/mock/yoshi.jpg'
import TOP_IMG from '../components/images/mock/sarada.jpg'
import { articleProps } from './home'

export const INITIALIZE = 'article/initialize'

export function initialize() {
  return {
    type: INITIALIZE,
  }
}

export type ArticleAction =
  | $ReturnType <typeof initialize>

export type ArticleState = {}

const initialState = {
  writer: {
    name: 'Yoshi Kazuya',
    imgUrl: WRITER_IMG,
  },
  tags: [
    'うまい',
    'ハンバーグ'
  ],
  articleTitle: '絶品ハンバーグを食べに行ったら天国な話',
  topImgUrl: TOP_IMG,
  releasedDate: '2018 02.10',
  articleContents: `<p>業務スーパーの冷凍食品で『デミハンバーグ』という商品はご存知でしょうか。定番おかずのハンバーグは業務スーパーでも種類豊富ですが、その中でも本品は1個当たり約57.2円という格安ぶり！ソース付きハンバーグとしては最安クラスに入る一品ではないかと。正直お値段なりのクオリティではありますが、 毎日のお弁当用にはかなり便利かと思います！</p><br/><img src='${TOP_IMG}' /><p><br/>業務スーパーの冷凍食品で『 デミハンバーグ』 という商品はご存知でしょうか。 定番おかずのハンバーグは業務スーパーでも種類豊富ですが、 その中でも本品は1個当たり約57 .2 円という格安ぶり！　 ソース付きハンバーグとしては最安クラスに入る一品ではないかと。 正直お値段なりのクオリティではありますが、 毎日のお弁当用にはかなり便利かと思います！</p><br/><img src='${TOP_IMG}' />`,
  relatedArticles: [
    articleProps(),
    articleProps(),
    articleProps(),
  ],
}

export const reducer = (state: ArticleState = initialState, action: ArticleAction) => {
  switch (action.type) {
    case INITIALIZE: {
      return state
    }
    default: {
      return state
    }
  }
}
