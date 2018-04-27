// @flow
import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../../styles/colors'
import { FONT_FAMILY } from '../../styles/font-family.css'

const { GRAY } = COLORS
const { AVENIR } = FONT_FAMILY

type Props = {|
  +name: string,
|}

export const WriterName = ({ name }: Props) => (
  <Text>
    { name }
  </Text>
)

const Text = styled.p`
  ${AVENIR}
  color: ${GRAY};
  font-size: 0.7em;
  font-weight: 600;
`
