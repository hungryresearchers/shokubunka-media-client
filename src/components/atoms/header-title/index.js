// @flow
import React from 'react'
import styled from 'styled-components'
import { FONT_FAMILY } from '../../styles/font-family.css'
import BACKGROUND_IMG from '../../images/top-background.jpg'
import { media } from '../../../utils/styles'
import { COLORS } from '../../styles/colors'

const { ZOUSAN } = FONT_FAMILY
const { ORANGE } = COLORS

export const HeaderTitle = () => (
  <Container className='d-flex align-items-center justify-content-center'>
    <TextContainer>
      <TitleUpper>
        カ ナ マ チ
      </TitleUpper>
      <TitleBottom>
        ショクブ ンカ
      </TitleBottom>
    </TextContainer>
  </Container>
)

const Container = styled.div`
  height: 40vh;
  min-height: 340px;
  background-image: url(${BACKGROUND_IMG});
  background-repeat: no-repeat;
  background-size: cover;

  @media ${media.small} {
    padding-top: 40px;
    height: auto;
    min-height: auto;
    background: none;
  }
`

const TextContainer = styled.div`
  margin-top: -4vh;
  @media ${media.small} {
    margin-top: auto;
  }
`

const zousan = `
  ${ZOUSAN}
  padding: 0;
  margin: 0;
  margin-bottom : 1vh;
  color: #fdeec2;
  text-shadow : 2px 5px 0px #F04220;

  @media ${media.small} {
    text-shadow: none;
    color: ${ORANGE};
  }
`

const TitleUpper = styled.h1`
  ${zousan}
  font-size: 4em;
`

const TitleBottom = styled.h2`
  ${zousan}
  font-size: 3em;
`
