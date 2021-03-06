// @flow
import React from 'react'
import styled from 'styled-components'
import {
  RelatedArticle,
  type Props as Article
} from '../../morecules/related-article'
import { TipsHeader } from '../../atoms/tips-header'

type Props = {|
  +articles: Article[],
|}

export const RelatedArticleArea = ({ articles }: Props) => (
  <Container>
    <TipsHeader
      title='関連記事'
    />
    <ArticlesContainer>
      {
        articles.map((article, i) => {
          const {
            tags,
            title,
            id,
            releasedDate,
            writerName,
            imgUrl,
            thumbUrl,
          } = article
          return (
            <RelatedArticle
              key={i}
              tags={tags}
              title={title}
              id={id}
              releasedDate={releasedDate}
              name={writerName}
              writerImgUrl={imgUrl}
              thumbUrl={thumbUrl}
              hasBorder={i !== (articles.length - 1)}
            />
          )
        })
      }
    </ArticlesContainer>
  </Container>
)

const Container = styled.div`
  width: 100%;
`

const ArticlesContainer = styled.div`
`
