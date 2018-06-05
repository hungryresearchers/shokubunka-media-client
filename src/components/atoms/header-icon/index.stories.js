// @flow
import React from 'react'
import { storiesOf } from '@storybook/react'
import { HeaderIcon } from '.'

storiesOf('HeaderIcon', module)
  .add('Default', () => (
    <div style={{textAlign: 'center', backgroundColor: 'orange'}}>
      <HeaderIcon />
    </div>
  ))
