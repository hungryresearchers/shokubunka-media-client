// @flow
import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../../styles/colors'
import { FONT_FAMILY } from '../../styles/font-family.css'
import { media } from '../../../utils/styles'

const { GRAY } = COLORS
const { AVENIR } = FONT_FAMILY

type Props = {|
  +name: string,
  fontSize?: string,
  color?: string,
  mobileFontSize?: string,
|}

export const WriterName = ({ name, fontSize, color, mobileFontSize }: Props) => (
  <Text
    fontSize={fontSize}
    color={color}
    mobileFontSize={mobileFontSize}
  >
    { name }
  </Text>
)

const Text = styled.p`
  ${AVENIR}
  color: ${props => props.color || GRAY};
  font-size: ${props => props.fontSize ? props.fontSize : '0.8em'};
  font-weight: 600;
  margin: 0;

  ${props => props.mobileFontSize && `
    @media ${media.small} {
      font-size: ${props.mobileFontSize};
    }
  `}
`
