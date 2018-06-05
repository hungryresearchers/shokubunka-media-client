// @flow
import React from 'react'
import styled from 'styled-components'
import { ArticleUpper } from '../article-upper'
import {
  type Tags,
  ArticleMiddle
} from '../article-middle'
import { ArticleTitle } from '../../atoms/article-title'
import { WriterInfo } from '../writer-info'

export type Props = {|
  +title: string,
  +articleUrl: string,
  +tags: Tags,
  +releasedDate: string,
  +isNew: boolean,
  +writerName: string,
  +imgUrl: string,
  +thumbUrl: string,
|}

const Article = ({ title, articleUrl, tags, releasedDate, isNew,
  writerName, imgUrl, thumbUrl } : Props) => (
  <Container>
    <ArticleUpper
      isNew={isNew}
      thumbUrl={thumbUrl}
    />
    <InfoContainer>
      <MiddleContainer>
        <ArticleMiddle
          tags={tags}
          releasedDate={releasedDate}
        />
      </MiddleContainer>
      <TitleContainer>
        <ArticleTitle
          title={title}
          articleUrl={articleUrl}
        />
      </TitleContainer>
      <WriterInfo
        name={writerName}
        imgUrl={imgUrl}
      />
    </InfoContainer>
  </Container>
)

const Container = styled.div`
  widht: 100%;
  padding: 0 3vw;
`

const InfoContainer = styled.div`
  padding: 0 10px;
  padding-top: 4%;
`

const MiddleContainer = styled.div`
  padding-bottom: 3%;
`

const TitleContainer = styled.div`
  padding-bottom: 2.5%;
`

export default Article
