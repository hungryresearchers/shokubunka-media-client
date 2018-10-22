// @flow
import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../../styles/colors'
import { FontFamily } from '../../styles/font-family.css'
import { media } from '../../../utils/styles'

import { HeaderIcon } from '../../atoms/header-icon'
import { HeaderNavs } from '../../morecules/header-navs'

const { ORANGE } = COLORS

type Props = {|
  to: string,
  upperTitle?: string,
  bottomTitle?: string,
  upperFontFamily?: FontFamily,
  bottomFontFamily?: FontFamily,
|}

export const Header = ({ to, upperTitle, bottomTitle, upperFontFamily, bottomFontFamily }: Props) => (
  <Head>
    <Container
      className='d-flex align-items-center justify-content-between'
    >
      <IconContainer>
        <HeaderIcon
          to={to}
          upperTitle={upperTitle}
          bottomTitle={bottomTitle}
          upperFontFamily={upperFontFamily}
          bottomFontFamily={bottomFontFamily}
        />
      </IconContainer>
      <NavsContainer
        className='col-8 col-sm-4 pr-3'
      >
        <HeaderNavs />
      </NavsContainer>
    </Container>
  </Head>
)

const Head = styled.header`
  @media ${media.small} {
    display: none;
  }
`

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
