// @flow
import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'
import { ArticleNewTag } from '.'

storiesOf('ArticleNewTag', module)
  .add('Default', () => (
    <Fragment>
      <ArticleNewTag />
    </Fragment>
  ))
