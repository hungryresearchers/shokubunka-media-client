// @flow
import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../../styles/colors'
import { FONT_FAMILY } from '../../styles/font-family.css'

const { GRAY } = COLORS
const { AVENIR } = FONT_FAMILY

type Props = {|
  +number: string,
|}

export const PhoneNumber = ({ number }: Props) => (
  <Text
    className='font-weight-bold m-0 p-0'
  >
    { number }
  </Text>
)

const Text = styled.p`
  ${AVENIR};
  color: ${GRAY};
  font-size: 1.1em;
`
