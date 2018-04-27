// @flow
import React from 'react'
import styled from 'styled-components'
import { FONT_FAMILY } from '../../styles/font-family.css'
import { COLORS } from '../../styles/colors'

const { YUGOTHIC } = FONT_FAMILY
const { GRAY } = COLORS

type Props = {|
  +tag: string,
|}

export const ArticleTag = ({ tag } : Props) => (
  <Tag className='d-inline-block'>
    { tag }
  </Tag>
)

const Tag = styled.div`
  ${YUGOTHIC}
  padding-right: 1vw;
  font-size: 1.1em;
  color: ${GRAY};
`
