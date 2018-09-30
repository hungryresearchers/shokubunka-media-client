// @flow
import WRITER_IMG from '../components/images/mock/yoshi.jpg'
import TOP_IMG from '../components/images/mock/sarada.jpg'
import { articleProps, SUCCESS_INIALIZE } from './home'
import { endpoints } from '../middlewares/callApi'
const { ARTICLE_INITIALIZE } = endpoints

export const INITIALIZE = 'article/initialize'
export const INITIALIZE_SUCCESS = 'article/initialize_success'
export const OPENED_SHOP_INFO_MODAL = 'article/opened_shop_info_modal'
export const CLOSED_SHOP_INFO_MODAL = 'article/close_shop_info_modal'

export function initialize(id: number) {
  return {
    type: INITIALIZE,
    endpoint: ARTICLE_INITIALIZE(id)
  }
}

export function handleClickInfo() {
  return {
    type: OPENED_SHOP_INFO_MODAL,
  }
}

export function handleClickModalCloseButton() {
  return {
    type: CLOSED_SHOP_INFO_MODAL
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
  phoneNumber: '123456789',
  businessHour: {
    open: '11:00',
    close: '23:00',
    holiday: '木',
  },
  requiredTime: '15',
  address: {
    postalCode: '〒123-1233',
    address: '家',
    latlng: {
      lat: 35.7717705,
      lng: 139.8634296,
    }
  },
  isOpenShopInfoModal: false,
}

function whenSuccessInitialize(state: ArticleState, response: Object) {
  const {
    title,
    tags,
    writer,
    thumbnail,
    id,
    releasedDate,
    content,
    shop: {
      open,
      close,
      holiday,
      postalCode,
      shop_map: {
        lat,
        lng
      },
      address,
      requiredTime,
      phoneNumber
    }
  } = response.post
  const articles = {
    articleTitle: title,
    writer,
    tags,
    id,
    releasedDate,
    articleContents: content,
    topImgUrl: thumbnail,
    phoneNumber,
    businessHour: {
      open,
      close,
      holiday
    },
    requiredTime,
    address: {
      postalCode,
      address,
      latlng: {
        lat: parseInt(lat, 10),
        lng: parseInt(lng, 10)
      }
    }
  }
  return { ...state, ...articles }
}

export const reducer = (state: ArticleState = initialState, action: ArticleAction) => {
  switch (action.type) {
    case INITIALIZE: {
      return state
    }
    case INITIALIZE_SUCCESS: {
      return whenSuccessInitialize(state, action.response)
    }
    case OPENED_SHOP_INFO_MODAL: {
      return { ...state, isOpenShopInfoModal: true }
    }
    case CLOSED_SHOP_INFO_MODAL: {
      return { ...state, isOpenShopInfoModal: false }
    }
    default: {
      return state
    }
  }
}
