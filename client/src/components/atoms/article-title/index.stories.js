// @flow
import React from 'react'
import { storiesOf } from '@storybook/react'
import { MemoryRouter as Router } from 'react-router-dom'
import { ArticleTitle } from '.'

storiesOf('ArticleTitle', module)
  .add('Default', () => (
    <Router>
      <ArticleTitle
        articleUrl='/'
        title='絶品ハンバーグを食べに行ったら天国だった話'
      />
    </Router>
  ))
