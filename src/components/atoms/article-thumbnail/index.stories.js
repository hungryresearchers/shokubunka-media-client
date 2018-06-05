// @flow
import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'
import { ArticleThumbnail } from '.'
import IMG from '../../images/mock/sarada.jpg'

storiesOf('ArticleThumbnail', module)
  .add('Default', () => (
    <Fragment>
      <ArticleThumbnail
        thumbUrl={IMG}
      />
    </Fragment>
  ))
