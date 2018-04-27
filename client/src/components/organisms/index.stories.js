// @flow
import React from 'react'
import { storiesOf } from '@storybook/react'
import { MemoryRouter as Router } from 'react-router-dom'
import { Header } from './header'

storiesOf('Organisms', module)
  .add('Header', () => (
    <Router>
      <Header />
    </Router>
  ))
