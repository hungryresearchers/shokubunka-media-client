// @flow
import React from 'react'
import styled from 'styled-components'
import { FONT_FAMILY } from '../../styles/font-family.css'
import { COLORS } from '../../styles/colors'
import { media } from '../../../utils/styles'

const { YUGOTHIC, TOPPANBUNKYU } = FONT_FAMILY
const { GRAY } = COLORS

export type Tag = string
type Props = {|
  +tag: Tag,
  +fontSize?: string,
  color?: string,
  header?: boolean
|}

export const ArticleTag = ({ tag, fontSize, color, header } : Props) => (
  <Text
    fontSize={fontSize}
    color={color}
    header={header}
  >
    { tag }
  </Text>
)

const Text = styled.p`
  ${YUGOTHIC}
  font-size: ${props => props.fontSize || '1.0em'}
  color: ${props => props.color || GRAY};
  margin: 0;

  @media ${media.small} {
    ${TOPPANBUNKYU}
    font-size: ${props => props.fontSize || (props.header ? '0.9em' : '0.6em')}
    font-weight: 600;
  }
`
