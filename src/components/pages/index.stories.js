// @flow
import React from 'react'
import { storiesOf } from '@storybook/react'
import { MemoryRouter as Router } from 'react-router-dom'
import { COLORS } from '../styles/colors'
import Home from './home'

import { articlesProps } from '../organisms/index.stories'

const { MILK } = COLORS

storiesOf('Pages', module)
  .add('Home', () => (
    <Router>
      <div style={{width: '100%', height: '100%', background: MILK}}>
        <Home
          home={{
            articles: articlesProps,
          }}
          actions={{
            initialize: () => {}
          }}
        />
      </div>
    </Router>
  ))
