// @flow
import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { Header } from '../../organisms/header'
import { DetailTop } from '../../morecules/detail-top'
import { ArticleContents } from '../../atoms/article-contents'

type Props = {|
  +actions: Object,
|}

export default class ArticlePage extends PureComponent<Props, void> {
  constructor(props: Props) {
    super()
  }

  componentDidMount() {
    this.props.actions.initialize()
  }

  render() {
    const { articlePage, actions } = this.props
    const { writer, tags, artcielTitle, topImgUrl, releasedDate, articleContents } = article
    return (
      <Container>
        <Header />
        <DetailContainer>
          <DetailTop
            imgUrl={writer.imgUrl}
            name={writer.name}
            onClickInfo={actions.openInfoCard}
            tags={tags}
            title={artcielTitle}
            topImgUrl={topImgUrl}
            releasedDate={releasedDate}
          />
          <ArticleContents>
            { articleContents }
          </ArticleContents>
        </DetailContainer>
      </Container>
    )
  }
}

const Container = styled.div``

const DetailContainer = styled.div``
