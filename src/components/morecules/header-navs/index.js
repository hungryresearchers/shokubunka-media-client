// @flow
import React from 'react'
import styled from 'styled-components'
import {
  type Props as Nav,
  HeaderNavText,
} from '../../atoms/header-nav-text'

export type Navs = Nav[]
const navs: Navs = [
  {
    text: '記事',
    linkTo: '/article/'
  }, {
    text: 'イベント',
    linkTo: '/event/'
  }, {
    text: 'ブログ',
    linkTo: '/article/'
  }
]

export const HeaderNavs = () => (
  <Container>
    {navs.map(({ text, linkTo }) => (
      <NavContainer
        className='d-inline-block'
        key={text}
      >
        <HeaderNavText
          text={text}
          linkTo={linkTo}
        />
      </NavContainer>
    ))}
  </Container>
)

const Container = styled.div``

const NavContainer = styled.div`
  padding: 0 1.5vw;
`
