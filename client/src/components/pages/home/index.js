// @flow
import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { Header } from '../../organisms/header'
import { HeaderTitle } from '../../atoms/header-title'
import {
  ArticlesArea,
  type Articles
} from '../../organisms/articles-area'
import { COLORS } from '../../styles/colors'

const { MILK } = COLORS

type Props = {|
  +actions: Object,
  home: {|
    +articles: Articles,
  |},
  +match: Object,
|}

export default class HomePage extends PureComponent<Props, void> {
  constructor(props : Props) {
    super()
  }

  componentDidMount() {
    this.props.actions.initialize()
  }

  render() {
    const { articles } = this.props.home
    return (
      <Container className='container-fluid' >
        <Header />
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
  background-color: ${MILK};
`

const ContentsContainer = styled.div`
  padding: 0 4.5vw;
  padding-top: 13vh;
`
