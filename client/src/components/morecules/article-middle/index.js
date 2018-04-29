// @flow
import React from 'react'
import styled from 'styled-components'
import {
  type Tag,
  ArticleTag,
} from '../../atoms/article-tag'
import { ReleasedDate } from '../../atoms/released-date'

export type Tags = Tag[]
type Props = {|
  +tags: Tags,
  +releasedDate: string,
|}

export const ArticleMiddle = ({ tags, releasedDate }: Props) => (
  <Container className='d-flex align-items-center justify-content-between' >
    <TagsContainer className='d-flex' >
      {
        tags.map((tag, i) => (
          <TagContainer
            key={i}
          >
            <ArticleTag
              tag={tag}
            />
          </TagContainer>
        ))
      }
    </TagsContainer>
    <ReleasedDateContainer
      className='col-4'
    >
      <ReleasedDate
        releasedDate={releasedDate}
      />
    </ReleasedDateContainer>
  </Container>
)

const Container = styled.div``

const TagContainer = styled.div`
  padding-right: 1.1em;
`

const TagsContainer = styled.div``

const ReleasedDateContainer = styled.div`
  padding-right: 0;
  text-aligh: right;
`
