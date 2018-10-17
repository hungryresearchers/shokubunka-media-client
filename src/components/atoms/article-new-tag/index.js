// @flow
import React from 'react'
import styled from 'styled-components'
import { FONT_FAMILY } from '../../styles/font-family.css'
import { COLORS } from '../../styles/colors'
import { media } from '../../../utils/styles'

const { AVENIR } = FONT_FAMILY
const { ORANGE } = COLORS

export const ArticleNewTag = () => (
  <Container>
    <Text>
      NEW
    </Text>
  </Container>
)

const Container = styled.div`
  position: absolute;
  background-color: ${ORANGE};
  top: 20%;
  padding: 0.4em 1.5em;
  padding-left: 3em;

  @media ${media.small} {
    padding: 0.4em 2em;
    padding-left: 3.7em;
  }
`

const Text = styled.p`
  font-size: 1.2em;
  color: white;
  font-style: oblique;
  font-weight: 600;
  ${AVENIR}
  padding: 0;
  margin: 0;

  @media ${media.small} {
    font-size: 1.4em;
    font-weight: 900;
  }
`
