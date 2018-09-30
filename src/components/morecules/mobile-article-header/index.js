// @flow// @flow
import React from 'react'
import styled from 'styled-components'
import { ArticleUpper } from '../article-upper'
import {
  type Tags,
  ArticleMiddle
} from '../article-middle'
import {
  type Tag,
  ArticleTag,
} from '../../atoms/article-tag'
import { Link } from 'react-router-dom'

import { ArticleTitle } from '../../atoms/article-title'
import { WriterInfo } from '../writer-info'
import { media } from '../../../utils/styles'
import { COLORS } from '../../styles/colors'
import { ReleasedDate } from '../../atoms/released-date'

const { WHITE } = COLORS

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
  <ArticleContainer>
    <article>
      <Link to={`/article/${id}`}>
        <Container>
          <ArticleUpper
            header
            isNew={isNew}
            thumbUrl={thumbUrl}
          />
          <InfoContainer>
            <TagsContainer className='d-flex' >
              {
                tags.map((tag, i) => (
                  <TagContainer
                    key={i}
                  >
                    <ArticleTag
                      tag={tag}
                      color={WHITE}
                      header
                    />
                  </TagContainer>
                ))
              }
            </TagsContainer>
            <TitleContainer>
              <ArticleTitle
                title={title}
                id={id}
                color={WHITE}
                textStyle={{
                  textAlign: 'right',
                  fontSize: '1.4em',
                }}
                header
              />
            </TitleContainer>
            <ReleasedDateContainer>
              <div className='d-inline-block' >
                <ReleasedDate
                  releasedDate={releasedDate}
                  color={WHITE}
                />
              </div>
            </ReleasedDateContainer>
            <WriterContainer>
              <div className='d-inline-block' >
                <WriterInfo
                  name={writerName}
                  imgUrl={imgUrl}
                  color={WHITE}
                  fontSize='0.8em'
                  mobileImgSize='1.3em'
                />
              </div>
            </WriterContainer>
          </InfoContainer>
        </Container>
      </Link>
    </article>
  </ArticleContainer>
)

const ArticleContainer = styled.div`
 @media ${media.medium} {
   display: none;
 }
 padding-bottom: 8vh;
`

const Container = styled.div`
  width: 100%;
  padding: 0;
  position: relative;
`

const InfoContainer = styled.div`
  padding: 0 10vw;
  padding-top: 4%;
  position: absolute;
  bottom: 11%;
`

const TagsContainer = styled.div`
 margin-bottom: 8px;
`

const TagContainer = styled.div`
  padding-right: 1.1em;
  @media ${media.small} {
    padding-right: 0.7em;
  }
`

const ReleasedDateContainer = styled.div`
  text-align: right;
`

const WriterContainer = styled.div`
  text-align: right;
`

const TitleContainer = styled.div`
`

export default Article
