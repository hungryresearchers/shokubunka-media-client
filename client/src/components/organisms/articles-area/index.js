// @flow
import React from 'react'
import styled from 'styled-components'
import ArticleCard, {
  type Props as Article,
} from '../../morecules/article'

export type  Articles = Article[]
type Props = {
  articles: Articles
}

export const ArticlesArea = ({ articles }: Props) => (
  <section>
    <Container className='row'>
      {
        articles.map((article, i) => {
          const {
            title,
            articleUrl,
            tags,
            releasedDate,
            isNew,
            writerName,
            imgUrl,
            thumbUrl
          } = article
          return (
            <ArticleContainer
              className='col-md-4 col-6'
              key={i}
            >
              <article>
                <ArticleCard
                  title={title}
                  articleUrl={articleUrl}
                  tags={tags}
                  releasedDate={releasedDate}
                  isNew={isNew}
                  writerName={writerName}
                  imgUrl={imgUrl}
                  thumbUrl={thumbUrl}
                />
              </article>
            </ArticleContainer>
          )
        })
      }
    </Container>
  </section>
)

const Container = styled.div``

const ArticleContainer = styled.div`
  padding-bottom: 8vh;
`
