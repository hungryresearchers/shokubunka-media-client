// @flow
import React from 'react'
import styled from 'styled-components'
import { ArticleNewTag } from '../../atoms/article-new-tag'
import { ArticleThumbnail } from '../../atoms/article-thumbnail'
import { media } from '../../../utils/styles'

type Props = {|
  +isNew: boolean,
  +thumbUrl: string,
  +header?: boolean
|}

export const ArticleUpper = ({ isNew, thumbUrl, header, }: Props) => (
  <Contaier>
    {
      isNew &&  (
        <NewTagContainer
          header={header}
        >
          <ArticleNewTag />
        </NewTagContainer>
      )
    }
    <ArticleThumbnail
      thumbUrl={thumbUrl}
      header={header}
    />
  </Contaier>
)

const Contaier = styled.div`
  position: relative;
`

const NewTagContainer = styled.div`
  top: 19%;
  left: -23px;
  position: absolute;

  @media ${media.small} {
  ${
  props => !props.header && `
      display: none;
    `
}
  }
`
