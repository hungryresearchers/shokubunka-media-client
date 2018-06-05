// @flow
import React from 'react'
import styled from 'styled-components'
import { ArticleNewTag } from '../../atoms/article-new-tag'
import { ArticleThumbnail } from '../../atoms/article-thumbnail'

type Props = {|
  +isNew: boolean,
  +thumbUrl: string,
|}

export const ArticleUpper = ({ isNew, thumbUrl }: Props) => (
  <Contaier>
    {
      isNew &&  (
        <NewTagContainer>
          <ArticleNewTag />
        </NewTagContainer>
      )
    }
    <ArticleThumbnail
      thumbUrl={thumbUrl}
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
`
