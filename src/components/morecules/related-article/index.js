// @flow
import React from 'react'
import styled from 'styled-components'
import {
  ArticleTag,
} from '../../atoms/article-tag'
import type { Tags as TagsType } from '../article-middle'
import { ArticleTitle } from '../../atoms/article-title'
import { DateWriterName } from '../date-writer-name'
import { COLORS } from '../../styles/colors'

const { GRAY_PALE } = COLORS

export type Props = {|
  +tags: TagsType,
  +title: string,
  +articleUrl: string,
  +releasedDate: string,
  +name: string,
  +writerImgUrl: string,
  +thumbUrl: string,
  +hasBorder?: boolean,
|}

const Tags = ({ tags }: { tags: TagsType }) => (
  <TagsContainer>
    {
      tags.map((tag, i) => (
        <TagContainer
          className='d-inline-block'
          key={i}
        >
          <ArticleTag
            tag={tag}
            fontSize='0.8em'
          />
        </TagContainer>
      ))
    }
  </TagsContainer>
)

export const RelatedArticle = ({ tags, title, articleUrl, releasedDate,
  name, writerImgUrl, thumbUrl, hasBorder }: Props) => (
  <Container
    className='d-flex justify-content-between'
    hasBorder={hasBorder}
  >
    <LeftContainer
      className='col-8 p-0'
    >
      <Tags
        tags={tags}
      />
      <TitleContainer>
        <ArticleTitle
          title={title}
          articleUrl={articleUrl}
        />
      </TitleContainer>
      <DateWriteNameContaier>
        <DateWriterName
          releasedDate={releasedDate}
          name={name}
          imgUrl={writerImgUrl}
        />
      </DateWriteNameContaier>
    </LeftContainer>
    <RightContainer
      className='col-3 p-0 d-flex align-items-center'
    >
      <Thumbnail
        thumbUrl={thumbUrl}
      />
    </RightContainer>
  </Container>
)

const Container = styled.div`
  padding-top: 2.5vh;
  padding-bottom: 3vh;
  ${props => props.hasBorder && `border-bottom: 0.2em solid ${GRAY_PALE};`}
`

const TagContainer = styled.div`
  padding-right: 0.8em;
`

const TagsContainer = styled.div`
  padding-bottom: 0.6vh;
`

const TitleContainer = styled.div`
  padding-bottom: 1.7vh;
`

const DateWriteNameContaier = styled.div``

const LeftContainer = styled.div``

const RightContainer = styled.div``

const Thumbnail = styled.div`
  background: no-repeat center center;
  background-image: url(${props => props.thumbUrl});
  background-size: cover;
  width: 100%;
  height: 75%;
  min-height: 70px;
  min-width: 70px;
`
