// @flow
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FONT_FAMILY } from '../../styles/font-family.css'
import { COLORS } from '../../styles/colors'

const { YUGOTHIC } = FONT_FAMILY
const { GRAY } = COLORS

type Props = {|
  +title: string,
  +articleUrl: string,
|}

export const ArticleTitle = ({ title, articleUrl }: Props) => (
  <Container to={articleUrl} >
    <Text>
      { title }
    </Text>
  </Container>
)

const Container = styled(Link)`
  text-align: left;

  &:hover {
    text-decoration: underline;
    text-decoration-color: ${GRAY};
  }
`

const Text = styled.h2`
  ${YUGOTHIC}
  font-size: 1.4em;
  font-weight: bold;
  letter-spacing: 0.04em;
  line-height: 1.3em;
  color: ${GRAY};
`
