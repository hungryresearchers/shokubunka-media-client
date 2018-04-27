// @flow
import React from 'react'
import { storiesOf } from '@storybook/react'
import { ReleasedDate } from '.'

storiesOf('ReleasedDate', module)
  .add('Default', () => (
    <div>
      <ReleasedDate date='2018 7 21' />
    </div>
  ))
