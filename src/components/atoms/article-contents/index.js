// @flow
import * as React from 'react'
import styled from 'styled-components'
import { FONT_FAMILY } from '../../styles/font-family.css'

const { YUGOTHIC } = FONT_FAMILY

type Props = {|
  +children: React.Node,
|}

export const ArticleContents = ({ children }: Props) => (
  <Container
    dangerouslySetInnerHTML={{__html: children}}
  />
)

const Container = styled.div`
  ${YUGOTHIC}
  font-size: 1.2em;
  line-height: 2.3em;
`
