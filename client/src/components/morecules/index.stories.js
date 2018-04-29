// @flow
import React from 'react'
import { storiesOf } from '@storybook/react'
import { MemoryRouter as Router } from 'react-router-dom'

import { HeaderNavs } from './header-navs'
import { ArticleUpper } from './article-upper'
import { ArticleMiddle } from './article-middle'
import { ArticleBottom } from './article-bottom'

import { COLORS } from '../styles/colors'
import THUMBNAIL from '../images/mock/sarada.jpg'
import WRITER_IMG from '../images/mock/yoshi.jpg'
import Article from './article'

const { ORANGE, MILK } = COLORS

export const articleProps = {
  title: '絶品ハンバーグを食べに行ったら天国だった話',
  articleUrl: 'https://twitter.com/',
  tags: [
    'ハンバーグ',
    '洋食',
  ],
  releasedDate: '2018 7 14',
  isNew: false,
  writerName: 'Yoshi Kazuya',
  imgUrl: WRITER_IMG,
  thumbUrl: THUMBNAIL,
}

storiesOf('Morecules', module)
  .add('HeaderNavs', () => (
    <div style={{textAlign: 'left', backgroundColor: `${ORANGE}`}}>
      <Router>
        <HeaderNavs
          navs={[
            { text: '記事', linkTo: '/article/' },
            { text: 'イベント', linkTo: '/event/' },
            { text: 'ブログ', linkTo: '/article/' },
          ]}
        />
      </Router>
    </div>
  ))
  .add('ArticleUpper', () => (
    <div>
      <ArticleUpper
        isNew={false}
        thumbUrl={THUMBNAIL}
      />
    </div>
  ))
  .add('ArticleUpper isNew', () => (
    <div style={{paddingLeft: '20vw'}}>
      <ArticleUpper
        isNew
        thumbUrl={THUMBNAIL}
      />
    </div>
  ))
  .add('ArticleMiddle', () => (
    <div style={{width: '25vw'}}>
      <ArticleMiddle
        tags={[
          'ハンバーグ',
          '洋食',
        ]}
        releasedDate='2018 12 21'
      />
    </div>
  ))
  .add('ArticleButtom', () => (
    <div style={{width: '25vw'}}>
      <ArticleBottom
        name='Yoshi Kazuya'
        imgUrl={WRITER_IMG}
      />
    </div>
  ))
  .add('Article', () => (
    <div
      style={{width: '100%', background: MILK}}
      className='col-md-4 col-sm-12'
    >
      <Router>
        <Article
          {...articleProps}
        />
      </Router>
    </div>
  ))
