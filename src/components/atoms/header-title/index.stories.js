// @flow
import React from 'react'
import { storiesOf } from '@storybook/react'
import { HeaderTitle } from '.'

storiesOf('HeaderTitle', module)
  .add('Default', () => (
    <div style={{textAlign: 'center'}}>
      <HeaderTitle />
    </div>
  ))
