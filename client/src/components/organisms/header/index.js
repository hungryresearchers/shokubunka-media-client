// @flow
import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../../styles/colors'

import { HeaderIcon } from '../../atoms/header-icon'
import {
  type Navs,
  HeaderNavs
} from '../../morecules/header-navs'

const { ORANGE } = COLORS

export const Header = () => (
  <Container
    className='d-flex align-items-center justify-content-between'
  >
    <IconContainer>
      <HeaderIcon />
    </IconContainer>
    <NavsContainer
      className='col-4'
    >
      <HeaderNavs />
    </NavsContainer>
  </Container>
)

const Container = styled.div`
  width: 100%;
  height: 8vh;
  min-height: 65px;
  background: ${ORANGE};
`

const IconContainer = styled.div`
  padding-left: 2.8vw;
`

const NavsContainer = styled.div`
  padding-right: 2.5vw;
`
