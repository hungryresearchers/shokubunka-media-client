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
    const { articles } = this.props.home
    return (
      <Container className='container-fluid' >
        <Helmet title={headerTitle('Home')} />
        <Header
          // todo
          to='/'
        />
        <HeaderTitle />
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

const ContentsContainer = styled.div`

  @media ${media.medium} {
    padding: 0 4.5vw;
    padding-top: 13vh;
  }

  @media ${media.small} {
    padding-top: 53px;
  }
`
