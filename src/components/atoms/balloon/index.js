// @flow
import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../../styles/colors'
import { FONT_FAMILY } from '../../styles/font-family.css'
import type { Colors } from '../../../types/colors'
import type { FontFamily } from '../../../types/font-family.css'

const { ORANGE, WHITE } = COLORS
const { TOPPANBUNKYU } = FONT_FAMILY

type Props = {|
  +text: string,
  +bgColor?: Colors,
  +fontColor?: Colors,
  +fontFamily?: FontFamily,
|}

export const Balloon = ({ text, bgColor, fontColor, fontFamily }: Props) => (
  <Container
    bgColor={bgColor}
    className='d-inline-block'
  >
    <Triangle
      bgColor={bgColor}
    />
    <Text
      fontColor={fontColor}
      fontFamily={fontFamily}
    >
      { text }
    </Text>
  </Container>
)

const Container = styled.div`
  padding: 0.7vh 1.5vw;
  border-radius: 3vw;
  background-color: ${props => props.bgColor || ORANGE};
  position: relative;
`

const Triangle = styled.span`
  height: 1.7em;
  width: 1.7em;
  left: 37%;
  position: absolute;
  top: -0.6em;
  background-color: ${props => props.bgColor || ORANGE};
  transform: rotate(45deg);
  z-index: 1;
  border-radius: 5px;
`

const Text = styled.p`
  margin: 0;
  padding: 0;
  color: ${({ fontColor }) => fontColor || WHITE};
  font-size: 1.3em;
  font-family: ${({ fontFamily }) => fontFamily || TOPPANBUNKYU};
  letter-spacing: 0.7px;
  z-index: 2;
  font-weight: 600;
  position: relative;
`
