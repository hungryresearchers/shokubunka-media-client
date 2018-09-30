// @flow
import * as React from 'react'
import styled from 'styled-components'
import ArticleCard, {
  type Props as Article,
} from '../../morecules/article'
import MobileHeaderArticleCard from '../../morecules/mobile-article-header'
import { media } from '../../../utils/styles'

export type  Articles = Article[]
type Props = {
  articles: Articles
}

export const ArticlesArea = ({ articles }: Props) => {
  if (articles[0] == null) {
    return null
  }
  const headerArticle = articles[0]
  return (
    <section>
      <MobileHeaderArticleCard
        title={headerArticle.title}
        id={headerArticle.id}
        tags={headerArticle.tags}
        releasedDate={headerArticle.releasedDate}
        isNew={headerArticle.isNew}
        writerName={headerArticle.writerName}
        imgUrl={headerArticle.imgUrl}
        thumbUrl={headerArticle.thumbUrl}
      />
      <Container className='row'>
        {
          articles.map((article, i) => {
            const {
              title,
              id,
              tags,
              releasedDate,
              isNew,
              writerName,
              imgUrl,
              thumbUrl
            } = article
            return (
              <React.Fragment
                key={id}
              >
                <ArticleCard
                  title={title}
                  id={id}
                  tags={tags}
                  releasedDate={releasedDate}
                  isNew={isNew}
                  writerName={writerName}
                  imgUrl={imgUrl}
                  thumbUrl={thumbUrl}
                />
              </React.Fragment>
            )
          })
        }
      </Container>
    </section>
  )
}

const Container = styled.div`
  @media ${media.small} {
    margin: 0;
  }
`

