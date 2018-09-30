// @flow
// TODO article-title との名前を考える
import React from 'react'
import styled from 'styled-components'
import { FONT_FAMILY } from '../../styles/font-family.css'
import { COLORS } from '../../styles/colors'
import { media } from '../../../utils/styles'

const { YUGOTHIC } = FONT_FAMILY
const { GRAY } = COLORS

type Props = {|
  +title: string,
|}

export const DetailTitle = ({ title }: Props) => (
  <Text>
    { title }
  </Text>
)

const Text = styled.h1`
  ${YUGOTHIC}
  font-size: 1.8em;
  font-weight: bold;
  color: ${GRAY};

  @media ${media.small} {
    font-size: 1.7em;
  }
`
