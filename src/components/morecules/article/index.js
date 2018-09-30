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
import { media } from '../../../utils/styles'
import { ReleasedDate } from '../../atoms/released-date'

export type Props = {|
  +title: string,
  +id: string,
  +tags: Tags,
  +releasedDate: string,
  +isNew: boolean,
  +writerName: string,
  +imgUrl: string,
  +thumbUrl: string,
|}

const Article = ({ title, id, tags, releasedDate, isNew,
  writerName, imgUrl, thumbUrl } : Props) => (
  <ArticleContainer
    className='col-md-4 col-6'
  >
    <article>
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
              id={id}
            />
          </TitleContainer>
          <BottomContainer>
            <ReleasedDateContainer>
              <ReleasedDate
                releasedDate={releasedDate}
              />
            </ReleasedDateContainer>
            <WriterContainer>
              <WriterInfo
                name={writerName}
                imgUrl={imgUrl}
                mobileImgSize='1.2em'
                mobileFontSize='0.6em'
              />
            </WriterContainer>
          </BottomContainer>
        </InfoContainer>
      </Container>
    </article>
  </ArticleContainer>
)

const ArticleContainer = styled.div`
  @media ${media.small} {
    &:nth-child(1) {
      display: none;
    }

    &:nth-child(odd) {
      padding-right: 10px;
      padding-left: 7px;
    }

    &:nth-child(even) {
      padding-right: 7px;
      padding-left: 10px;
    }
    }

  }
   padding-bottom: 8vh;
`

const Container = styled.div`
  width: 100%;
  padding: 0 3vw;
  @media ${media.small} {
    padding: 0;
  }
`

const InfoContainer = styled.div`
  padding: 0 10px;
  padding-top: 4%;

  @media ${media.small} {
    padding-right: 1px;
  }
`

const MiddleContainer = styled.div`
  padding-bottom: 3%;
`

const TitleContainer = styled.div`
  padding-bottom: 2.5%;

  @media ${media.small} {
    padding-bottom: 2px;
  }
`

const BottomContainer = styled.div``

const WriterContainer = styled.div`
  
  @media ${media.small} {
    float: right;
  }
`

const ReleasedDateContainer = styled.div`
  display: inline-block;
  @media ${media.medium} {
    display: none;
  }
`

export default Article
