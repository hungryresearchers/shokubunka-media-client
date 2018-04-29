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
        articles.map((article, i) => (
          <ArticleContainer
            className='col-md-4 col-6'
            key={i}
          >
            <article>
              <ArticleCard
                {...article}
              />
            </article>
          </ArticleContainer>
        ))
      }
    </Container>
  </section>
)

const Container = styled.div``

const ArticleContainer = styled.div`
  padding-bottom: 8vh;
`
