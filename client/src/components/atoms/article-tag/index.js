// @flow
import React from 'react'
import styled from 'styled-components'
import { FONT_FAMILY } from '../../styles/font-family.css'
import { COLORS } from '../../styles/colors'

const { YUGOTHIC } = FONT_FAMILY
const { GRAY } = COLORS

export type Tag = string
type Props = {|
  +tag: Tag,
|}

export const ArticleTag = ({ tag } : Props) => (
  <Text>
    { tag }
  </Text>
)

const Text = styled.p`
  ${YUGOTHIC}
  font-size: 1.0em;
  color: ${GRAY};
  margin: 0;
`
