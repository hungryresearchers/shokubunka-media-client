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
  +fontSize?: string,
|}

export const ArticleTag = ({ tag, fontSize } : Props) => (
  <Text
    fontSize={fontSize}
  >
    { tag }
  </Text>
)

const Text = styled.p`
  ${YUGOTHIC}
  font-size: ${props => props.fontSize || '1.0em'}
  color: ${GRAY};
  margin: 0;
`
