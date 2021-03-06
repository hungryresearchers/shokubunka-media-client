// @flow
import React from 'react'
import { storiesOf } from '@storybook/react'
import { MemoryRouter as Router } from 'react-router-dom'
import { Header } from './header'
import { ArticlesArea } from './articles-area'
import { RelatedArticleArea } from './related-article-area'
import { ArticleWriter } from './article-writer'
import { ShopInfoArea } from './shop-info-area'

import { COLORS } from '../styles/colors'
import SARADA_IMG from '../images/mock/sarada.jpg'
import WRITER_IMG from '../images/mock/yoshi.jpg'

import { articleProps } from '../morecules/index.stories'

const { MILK } = COLORS

export const articlesProps = [
  articleProps,
  articleProps,
  articleProps,
  articleProps,
  articleProps,
  articleProps,
  articleProps,
  articleProps,
]

storiesOf('Organisms', module)
  .add('Header', () => (
    <Router>
      <Header />
    </Router>
  ))
  .add('Articles', () => (
    <Router>
      <div style={{width: '100%', height: '100%', background: MILK}}>
        <ArticlesArea
          articles={articlesProps}
        />
      </div>
    </Router>
  ))
  .add('ReletedArticleArea', () => (
    <Router>
      <div style={{padding: '0 30vw'}}>
        <RelatedArticleArea
          articles={articlesProps}
        />
      </div>
    </Router>
  ))
  .add('ArticleWriter', () => (
    <Router>
      <div style={{padding: '0 30vw'}}>
        <ArticleWriter
          writerInfo={{
            name: 'Yoshi Kazuya',
            imgUrl: WRITER_IMG,
          }}
        />
      </div>
    </Router>
  ))
  .add('ShopInfoArea', () => (
    <Router>
      <div style={{padding: '0 30vw'}}>
        <ShopInfoArea
          phoneNumber='123456789'
          businessHour={{
            open: '11:00',
            close: '23:00',
            holiday: '木曜',
          }}
          requiredTime='15'
          address={{
            postalCode: '〒162-0825',
            address: '東京都新宿区神楽坂３丁目１ 松本ハイツB1F'
          }}
          latlng={{
            lat: 12,
            lng: 13,
          }}
        />
      </div>
    </Router>
  ))
