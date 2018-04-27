// @flow
import React from 'react'
import { storiesOf } from '@storybook/react'
import { MemoryRouter as Router } from 'react-router-dom'
import { COLORS } from '../styles/colors'
import { HeaderNavs } from './header-navs'

const { ORANGE } = COLORS

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
