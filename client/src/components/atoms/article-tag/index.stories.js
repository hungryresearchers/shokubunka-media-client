// @flow
import React from 'react'
import { storiesOf } from '@storybook/react'
import { ArticleTag } from '.'

storiesOf('ArticleTag', module)
  .add('ハンバーグ', () => (
    <div style={{textAlign: 'center'}}>
      <ArticleTag tag='ハンバーグ' />
    </div>
  ))
