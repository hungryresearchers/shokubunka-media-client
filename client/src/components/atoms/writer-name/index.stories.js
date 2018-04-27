// @flow
import React from 'react'
import { storiesOf } from '@storybook/react'
import { WriterName } from '.'

storiesOf('WriterName', module)
  .add('Default', () => (
    <div>
      <WriterName
        name='Yoshi Kazuya'
      />
    </div>
  ))
