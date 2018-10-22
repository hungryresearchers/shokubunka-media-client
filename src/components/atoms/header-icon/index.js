// @flow
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FONT_FAMILY, FontFamily } from '../../styles/font-family.css'
import { COLORS } from '../../styles/colors'

const { WHITE } = COLORS

type Props = {|
  to: string,
  upperTitle: ?string,
  bottomTitle: ?string,
  upperFontFamily?: FontFamily,
  bottomFontFamily?: FontFamily
|}

export const HeaderIcon = ({ to, upperTitle, bottomTitle, upperFontFamily = 'AVENIR', bottomFontFamily = 'ZOUSAN' }: Props) => (
  <Container to={to} >
    <UpperText className='m-0' fontFamily={upperFontFamily}>{ upperTitle || 'What is' }</UpperText>
    <BottomText className='m-0' fontFamily={bottomFontFamily}>{ bottomTitle || 'ショクブ ンカ' }</BottomText>
  </Container>
)

const Container = styled(Link)`
  text-align: center;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    text-decoration: none;
    color: ${WHITE};
  }
  color: ${WHITE};
`
const UpperText = styled.p`
  ${({ fontFamily }) => FONT_FAMILY[fontFamily]}
  font-size: 0.9em;
  line-height: 1.0em;
  font-weight: 600;
  ${({ fontFamily }) => fontFamily === 'ZOUSAN' && `
    font-size: 1em;
    line-height: 1.5em;
  `}
`

const BottomText = styled.p`
  ${({ fontFamily }) => FONT_FAMILY[fontFamily]}
  font-size: 0.9em;
  line-height: 1.0em;
  letter-spaceing: 3em;
`
