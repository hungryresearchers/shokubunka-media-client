// @flow
import React from 'react'
import { storiesOf } from '@storybook/react'
import { AuthorImg } from '.'
import AUTHOR_IMG from '../../images/mock/yoshi.jpg'

storiesOf('AuthorImg', module)
  .add('Default', () => (
    <div>
      <AuthorImg
        imgUrl={AUTHOR_IMG}
      />
    </div>
  ))
