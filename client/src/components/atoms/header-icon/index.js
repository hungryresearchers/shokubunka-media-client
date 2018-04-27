// @flow
import React from 'react'
import styled from 'styled-components'
import { FONT_FAMILY } from '../../styles/font-family.css'
import { COLORS } from '../../styles/colors'

const { ZOUSAN, AVENIR } = FONT_FAMILY
const { WHITE } = COLORS

export const HeaderIcon = () => (
  <Container>
    <UpperText className='m-0' >What is</UpperText>
    <BottomText className='m-0' >ショクブ ンカ</BottomText>
  </Container>
)

const Container = styled.div`
  opacity: 0.3;

  &:hover {
    opacity: 1;
  }
  color: ${WHITE};
`
const UpperText = styled.p`
  ${AVENIR}
  font-size: 1.1em;
  line-height: 1.1em;
  font-weight: 600;
`

const BottomText = styled.p`
  ${ZOUSAN}
  font-size: 1.0em;
  line-height: 1.0em;
  letter-spaceing: 3em;
`
