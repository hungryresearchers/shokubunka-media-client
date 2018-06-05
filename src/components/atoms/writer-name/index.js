// @flow
import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../../styles/colors'
import { FONT_FAMILY } from '../../styles/font-family.css'

const { GRAY } = COLORS
const { AVENIR } = FONT_FAMILY

type Props = {|
  +name: string,
  fontSize?: string,
|}

export const WriterName = ({ name, fontSize }: Props) => (
  <Text
    fontSize={fontSize}
  >
    { name }
  </Text>
)

const Text = styled.p`
  ${AVENIR}
  color: ${GRAY};
  font-size: ${props => props.fontSize ? props.fontSize : '0.8em'};
  font-weight: 600;
  margin: 0;
`
