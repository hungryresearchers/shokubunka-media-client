// @flow
import * as React from 'react'
import styled from 'styled-components'
import { FONT_FAMILY } from '../../styles/font-family.css'
import { media } from '../../../utils/styles'

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
  text-align: justify;
  color: rgb(45, 45, 42);

  & img {
    max-width: 100%;
  }
  @media ${media.small} {
    font-size: 0.972em;
    line-height: 1.9em;
  }
`
