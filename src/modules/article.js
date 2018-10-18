// @flow
import { endpoints } from '../middlewares/callApi'
const { GET_ARTICLE, GET_SHOP_INFO } = endpoints

export const INITIALIZE = 'article/initialize'
export const INITIALIZE_SUCCESS = 'article/initialize_success'
export const OPENED_SHOP_INFO_MODAL = 'article/opened_shop_info_modal'
export const CLOSED_SHOP_INFO_MODAL = 'article/close_shop_info_modal'
export const INHERIT_ARTICLE_CONTENT_FROM_HOME = 'article/inherit_article_content_from_home'
export const GOT_SHOP_INFO = 'article/got_shop_info'
export const GOT_SHOP_INFO_SUCCESS = 'article/got_shop_info_success'
export const RESET = 'article/reset'

export function initializeArticle(id: number) {
  return {
    type: INITIALIZE,
    endpoint: GET_ARTICLE(id)
  }
}

export function getShopInfo(id: number) {
  return {
    type: GOT_SHOP_INFO,
    endpoint: GET_SHOP_INFO(id)
  }
}

// TODO
export const initialize = (id: number) => async(dispatch: Function, getState: Function) => {
  const beforeState = getState()
  if (beforeState.home.articles.length > 0) {
    const article = beforeState.home.articles.filter(article => article.id === id)[0]
    const {
      title,
      content,
      tags,
      releasedDate,
      thumbUrl,
      imgUrl,
      writerName,
      shopId
    } = article
    dispatch(
      inheritArticleContentFromHome({
        articleTitle: title,
        articleContents: content,
        tags,
        writer: {
          name: writerName,
          imgUrl: imgUrl,
        },
        topImgUrl: thumbUrl,
        releasedDate,
        shopId,
      })
    )
    Promise.all([
      dispatch(getShopInfo(shopId)),
      dispatch(initializeArticle(id))
    ])
  }
  else {
    await dispatch(initializeArticle(id))
    const { shopId } = getState().article
    dispatch(getShopInfo(shopId))
  }
}

type MainContent = {
  writer: {
    name: string,
    imgUrl: ?string,
  },
  tags: string[],
  articleTitle: string,
  topImgUrl: ?string,
  releasedDate: string,
  articleContents: string
}

export function inheritArticleContentFromHome (article: MainContent) {
  return {
    type: INHERIT_ARTICLE_CONTENT_FROM_HOME,
    article
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
  | $ReturnType <typeof handleClickInfo>
  | $ReturnType <typeof handleClickModalCloseButton>
  | $ReturnType <typeof reset>
  | $ReturnType <typeof inheritArticleContentFromHome>

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
  shopId: ?string,
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
  shopId: null,
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
      lng: null,
    }
  },
  isOpenShopInfoModal: false,
}

function wheneSuccessGetShopInfo(state: ArticleState, response: Object) {
  const {
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
  } = response.shop
  const shopInfo = {
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
        lat: Number(lat),
        lng: Number(lng)
      }
    }
  }

  return { ...state, ...shopInfo }
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
    shopId,
  } = response.post
  const articles = {
    articleTitle: title,
    writer,
    tags,
    id,
    releasedDate,
    articleContents: content,
    topImgUrl: thumbnail,
    shopId,
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
    case INHERIT_ARTICLE_CONTENT_FROM_HOME: {
      return { ...state, ...action.article }
    }
    case OPENED_SHOP_INFO_MODAL: {
      return { ...state, isOpenShopInfoModal: true }
    }
    case CLOSED_SHOP_INFO_MODAL: {
      return { ...state, isOpenShopInfoModal: false }
    }
    case GOT_SHOP_INFO: {
      return state
    }
    case GOT_SHOP_INFO_SUCCESS: {
      return wheneSuccessGetShopInfo(state, action.response)
    }
    case RESET: {
      return initialState
    }
    default: {
      return state
    }
  }
}
