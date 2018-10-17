// @flow
import { endpoints } from '../middlewares/callApi'
const { ARTICLE_INITIALIZE } = endpoints

export const INITIALIZE = 'article/initialize'
export const INITIALIZE_SUCCESS = 'article/initialize_success'
export const OPENED_SHOP_INFO_MODAL = 'article/opened_shop_info_modal'
export const CLOSED_SHOP_INFO_MODAL = 'article/close_shop_info_modal'
export const RESET = 'article/reset'

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

export function reset() {
  return {
    type: RESET
  }
}

export type ArticleAction =
  | $ReturnType <typeof initialize>

export type ArticleState = {
  writer: {
    name: string,
    imgUrl: ?string,
  },
  tags: string[],
  articleTitle: string,
  topImgUrl: ?string,
  releasedDate: string,
  articleContents: string,
  relatedArticles: string[],
  phoneNumber: string,
  businessHour: ?{
    open: string,
    close: string,
    holiday: string,
  },
  requiredTime: string,
  address: ?{
    postalCode: string,
    address: string,
    latlng: {
      lat: ?string,
      lng: ?string
    }
  },
  isOpenShopInfoModal: boolean,
}

const initialState = {
  writer: {
    name: '',
    imgUrl: null,
  },
  tags: [],
  articleTitle: '',
  topImgUrl: null,
  releasedDate: '',
  articleContents: '',
  relatedArticles: [],
  phoneNumber: '',
  businessHour: {
    open: '',
    close: '',
    holiday: '',
  },
  requiredTime: '',
  address: {
    postalCode: '',
    address: '',
    latlng: {
      lat: null,
      lng: null
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
    case RESET: {
      return initialState
    }
    default: {
      return state
    }
  }
}
