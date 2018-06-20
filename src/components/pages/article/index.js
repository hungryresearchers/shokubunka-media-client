// @flow
import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { Header } from '../../organisms/header'
import { DetailTop } from '../../morecules/detail-top'
import { ArticleContents } from '../../atoms/article-contents'
import { RelatedArticleArea } from '../../organisms/related-article-area'
import { ArticleWriter } from '../../organisms/article-writer'
import { RectangleButton } from '../../atoms/rectangle-button'
import { ShopInfoArea } from '../../organisms/shop-info-area'
import { Link } from 'react-router-dom'

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
    const { writer, tags, articleTitle, topImgUrl, releasedDate, articleContents, relatedArticles,
      phoneNumber, businessHour, requiredTime, address } = article
    return (
      <Container>
        <Header />
        <DetailContainer>
          <TopContainer>
            <DetailTop
              imgUrl={writer.imgUrl}
              name={writer.name}
              onClickInfo={actions.openInfoCard}
              tags={tags}
              title={articleTitle}
              topImgUrl={topImgUrl}
              releasedDate={releasedDate}
            />
          </TopContainer>
          <ContentsContainer>
            <ArticleContents>
              { articleContents }
            </ArticleContents>
          </ContentsContainer>
          <ShopInfoContaier>
            <ShopInfoArea
              phoneNumber={phoneNumber}
              businessHour={businessHour}
              requiredTime={requiredTime}
              address={address}
            />
          </ShopInfoContaier>
          <RelatedArticlesContainer>
            <RelatedArticleArea
              articles={relatedArticles}
            />
          </RelatedArticlesContainer>
          <WriterContainer>
            <ArticleWriter
              writerInfo={writer}
            />
          </WriterContainer>
          <CloseButtonContainer to='/'>
            <RectangleButton
              text='記事を閉じる'
              onClick={() => {}}
            />
          </CloseButtonContainer>
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

const TopContainer = styled.div`
  margin-bottom: 5vh;
`

const ContentsContainer = styled.div`
  margin-bottom: 9vh;
`
const ShopInfoContaier = styled.div`
  margin-bottom: 11vh;
`

const RelatedArticlesContainer = styled.div`
  margin-bottom: 11vh;
`

const WriterContainer = styled.div`
  margin-bottom: 7vh;
`

const CloseButtonContainer = styled(Link)`
  margin-bottom: 7vh;

  &:hover {
    text-decoration: none;
  }
`
