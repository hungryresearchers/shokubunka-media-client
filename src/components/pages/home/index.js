// @flow
import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'
import { Header } from '../../organisms/header'
import { HeaderTitle } from '../../atoms/header-title'
import {
  ArticlesArea,
  type Articles
} from '../../organisms/articles-area'
import { COLORS } from '../../styles/colors'
import { media } from '../../../utils/styles'
import { headerTitle } from '../../../utils/headerTitle'
import CircleServiceIcon from '../../atoms/circle-service-icon'

const { MILK } = COLORS

type Props = {|
  +actions: Object,
  home: {|
    +articles: Articles,
  |},
|}

export default class HomePage extends PureComponent<Props, void> {
  componentDidMount() {
    this.props.actions.initialize()
  }

  render() {
    const { home, load: { isLoading } } = this.props
    const { articles } = home
    return (
      <Container className='container-fluid' >
        <Helmet title={headerTitle('Home')} />
        <Header
          // todo
          to='/'
        />
        <HeaderTitle />
        {
          (isLoading && articles.length < 1) &&
          <LoadingIconContainer>
            <CircleServiceIcon
              size={250}
              sizeUnit='px'
            />
          </LoadingIconContainer>
        }
        <ContentsContainer>
          <ArticlesArea
            articles={articles}
          />
        </ContentsContainer>
      </Container>
    )
  }
}

const Container = styled.div`
  padding: 0;
  min-height: 100vh;
  background-color: ${MILK};
`

const LoadingIconContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 10vh;
`

const ContentsContainer = styled.div`

  @media ${media.medium} {
    padding: 0 4.5vw;
    padding-top: 13vh;
  }

  @media ${media.small} {
    padding-top: 53px;
  }
`
