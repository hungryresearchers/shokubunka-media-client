// @flow
import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../../styles/colors'
import { FONT_FAMILY } from '../../styles/font-family.css'
import { media } from '../../../utils/styles'

const { WHITE, ORANGE } = COLORS
const { YUGOTHIC } = FONT_FAMILY

type Props = {|
  +text: string,
  +onClick: Function,
  +BGColor?: string,
  +color?: string,
  +containerStyle?: Object,
  +textStyle?: Object,
|}

export const RectangleButton = ({ text, BGColor, color, onClick, containerStyle, textStyle, }: Props) => (
  <Container
    className='text-center'
    onClick={onClick}
    style={containerStyle}
  >
    <Text
      className='m-0 p-0'
      style={textStyle}
    >
      { text }
    </Text>
  </Container>
)

const Container = styled.div`
  background-color: ${props => props.BGColor || ORANGE}
  width: 100%;
  padding-top: 1.5em;
  padding-bottom: 1.55em;
`

const Text = styled.p`
  ${YUGOTHIC}
  color: ${props => props.color || WHITE};
  font-size: 1.3em;
  font-weight: bold;

  @media ${media.small} {
    font-size: 1.2em;
  }
`
