// @flow
import React from 'react'
import { storiesOf } from '@storybook/react'
import { HeaderNavText } from '.'
import { MemoryRouter as Router } from 'react-router-dom'
import { COLORS } from '../../styles/colors'

const { ORANGE } = COLORS

storiesOf('HeaderNavText', module)
  .add('記事', () => (
    <div style={{textAlign: 'center', backgroundColor: `${ORANGE}`}}>
      <Router>
        <HeaderNavText text='記事' linkTo='/article' />
      </Router>
    </div>
  ))
  .add('イベント', () => (
    <div style={{textAlign: 'center', backgroundColor: `${ORANGE}`}}>
      <Router>
        <HeaderNavText text='イベント' linkTo='/event' />
      </Router>
    </div>
  ))
  .add('ブログ', () => (
    <div style={{textAlign: 'center', backgroundColor: `${ORANGE}`}}>
      <Router>
        <HeaderNavText text='ブログ' linkTo='/blog' />
      </Router>
    </div>
  ))
