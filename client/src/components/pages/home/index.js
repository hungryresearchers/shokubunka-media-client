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

type Props = {
  actions: Object,
  articles: Articles,
}

export default class Home extends PureComponent<Props, void> {
  constructor(props : Props) {
    super()
  }

  componentDidMount() {
    this.props.actions.initialize()
  }

  render() {
    const { articles } = this.props
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
