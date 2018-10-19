// @flow
import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'
import { Header } from '../../organisms/header'
import { DetailTop } from '../../morecules/detail-top'
import { ArticleContents } from '../../atoms/article-contents'
import { RelatedArticleArea } from '../../organisms/related-article-area'
import { ArticleWriter } from '../../organisms/article-writer'
import { RectangleButton } from '../../atoms/rectangle-button'
import { ShopInfoArea } from '../../organisms/shop-info-area'
import { Link } from 'react-router-dom'
import { ShopDetailModal } from '../../organisms/shop-detail-modal'
import { media } from '../../../utils/styles'
import { headerTitle } from '../../../utils/headerTitle'
import TrackVisibility from 'react-on-screen'

type Props = {|
  +actions: Object,
  match: any,
  article: Object,
|}

export default class Article extends PureComponent<Props, void> {
  componentDidMount() {
    const { id } = this.props.match.params
    this.props.actions.initialize(parseInt(id, 10))
  }

  componentWillUnmount() {
    this.props.actions.reset()
  }

  render() {
    const { article, actions, load: { isLoading } } = this.props
    const { writer, tags, articleTitle, topImgUrl, releasedDate, articleContents, relatedArticles,
      phoneNumber, businessHour, requiredTime, address, isOpenShopInfoModal, shopId } = article
    const description = articleContents.toString().replace(/\r?\n/g, '').slice(0, 120) + '...'
    return (
      <Container>
        <Helmet
          title={headerTitle(articleTitle)}
          meta={[
            { name: 'description', content: description },
            { property: 'og:title', content: articleTitle },
            { property: 'og:type', content: 'blog' },
            { property: 'og:image', content: topImgUrl },
            { property: 'og:description', content: description },
            { name: 'twitter:card', content: 'summary' },
            { name: 'twitter:site', content: '@hungryresearch' },
          ]}
        />
        <ShopDetailModal
          phoneNumber={phoneNumber}
          businessHour={businessHour}
          requiredTime={requiredTime}
          address={address}
          handleClickModalCloseButton={actions.handleClickModalCloseButton}
          isOpen={isOpenShopInfoModal}
        />
        <Header />
        <DetailContainer>
          <TopContainer>
            <DetailTop
              imgUrl={writer.imgUrl}
              name={writer.name}
              handleClickInfo={actions.handleClickInfo}
              tags={tags}
              title={articleTitle}
              topImgUrl={topImgUrl}
              releasedDate={releasedDate}
              renderShopInfo={shopId != null}
            />
          </TopContainer>
          <LowerContainer>
            <ContentsContainer>
              <ArticleContents>
                { articleContents }
              </ArticleContents>
            </ContentsContainer>
            <TrackVisibility offset={250} once>
              {
                ({ isVisible }) => (shopId != null && !isLoading && isVisible) &&
                <ShopInfoContaier>
                  <ShopInfoArea
                    phoneNumber={phoneNumber}
                    businessHour={businessHour}
                    requiredTime={requiredTime}
                    address={address}
                  />
                </ShopInfoContaier>
              }
            </TrackVisibility>
            {
              relatedArticles.length > 0 &&
              <RelatedArticlesContainer>
                <RelatedArticleArea
                  articles={relatedArticles}
                />
              </RelatedArticlesContainer>
            }
            <WriterContainer>
              <ArticleWriter
                writerInfo={writer}
              />
            </WriterContainer>
            {
              !isLoading &&
              <CloseButtonContainer to='/'>
                <RectangleButton
                  text='記事を閉じる'
                  onClick={() => {}}
                />
              </CloseButtonContainer>
            }
          </LowerContainer>
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

  @media ${media.small} {
    padding: 0;
    padding-bottom: 10vh;
  }
`

const TopContainer = styled.div`
  margin-bottom: 5vh;
`

const ContentsContainer = styled.div`
  margin-bottom: 9vh;

  @media ${media.small} {
    margin-bottom: 90px;
  }
`
const ShopInfoContaier = styled.div`
  margin-bottom: 11vh;

  @media ${media.small} {
    margin-bottom: 110px;
  }
`

const RelatedArticlesContainer = styled.div`
  margin-bottom: 11vh;
`

const WriterContainer = styled.div`
  margin-bottom: 7vh;
  
  @media ${media.small} {
    margin-bottom: 70px;
  }
`

const LowerContainer = styled.div`
  @media ${media.small} {
    padding: 0 5.5vw;
  }
`

const CloseButtonContainer = styled(Link)`
  margin-bottom: 7vh;

  &:hover {
    text-decoration: none;
  }
`
