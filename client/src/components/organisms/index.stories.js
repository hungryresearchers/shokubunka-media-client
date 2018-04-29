// @flow
import React from 'react'
import { storiesOf } from '@storybook/react'
import { MemoryRouter as Router } from 'react-router-dom'
import { Header } from './header'
import { ArticlesArea } from './articles-area'
import { COLORS } from '../styles/colors'

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