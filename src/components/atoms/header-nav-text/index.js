// @flow
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { COLORS } from '../../styles/colors'
import { FONT_FAMILY } from '../../styles/font-family.css'

const { WHITE } = COLORS
const { TOPPANBUNKYU } = FONT_FAMILY

export type Props = {|
  +text: string,
  +linkTo: string,
|}

export const HeaderNavText = ({ text, linkTo }: Props) => (
  <Text to={linkTo} className='navbar-nav'>{text}</Text>
)

const Text = styled(Link)`
  font-size: 1.2em;
  text-align: center;
  padding: 0 0.027vw;
  color: ${WHITE};
  ${TOPPANBUNKYU}
  opacity: 0.3;

  &:hover {
    opacity: 1.0;
    color: ${WHITE};
    text-decoration: none;
  }
`
