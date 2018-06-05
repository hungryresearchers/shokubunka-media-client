// @flow
import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { Header } from '../../organisms/header'
import { DetailTop } from '../../morecules/detail-top'
import { ArticleContents } from '../../atoms/article-contents'
import { RelatedArticleArea } from '../../organisms/related-article-area'
import { ArticleWriter } from '../../organisms/article-writer'

type Props = {|
  +actions: Object,
|}

export default class Article extends PureComponent<Props, void> {
  constructor(props: Props) {
    super()
  }

  componentDidMount() {
    this.props.actions.initialize()
  }

  render() {
    const { article, actions } = this.props
    const { writer, tags, articleTitle, topImgUrl, releasedDate, articleContents, relatedArticles } = article
    return (
      <Container>
        <Header />
        <DetailContainer>
          <DetailTop
            imgUrl={writer.imgUrl}
            name={writer.name}
            onClickInfo={actions.openInfoCard}
            tags={tags}
            title={articleTitle}
            topImgUrl={topImgUrl}
            releasedDate={releasedDate}
          />
          <ArticleContents>
            { articleContents }
          </ArticleContents>
          <RelatedArticleArea
            articles={relatedArticles}
          />
          <ArticleWriter
            writerInfo={writer}
          />
        </DetailContainer>
      </Container>
    )
  }
}

const Container = styled.div`
`

const DetailContainer = styled.div`
  padding: 0 31vw;
  padding-top: 3vh;
  padding-bottom: 5vh;
`
