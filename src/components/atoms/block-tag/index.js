// @flow
import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../../styles/colors'
import { FONT_FAMILY } from '../../styles/font-family.css'
import { media } from '../../../utils/styles'

const { GRAY, WHITE } = COLORS
const { TOPPANBUNKYU, AVENIR } = FONT_FAMILY

type Props = {|
  +text: string,
|}

export const BlockTag = ({ text }: Props) => (
  <Container
    className='d-inline-block'
  >
    <Text>
      { text }
    </Text>
  </Container>
)

const Container = styled.div`
  padding: 0.6em 1.6em 0.6em 1.6em;
  background-color: ${GRAY};

  @media ${media.small} {
    padding: 0.47em 1.08em 0.46em 1.08em;
  }
`

const Text = styled.p`
  ${TOPPANBUNKYU}
  color: ${WHITE};
  font-size: 1.1em;
  font-weight: 600;
  margin: 0;
  padding: 0;
  @media ${media.small} {
    font-size: 0.81em;
    font-weight: 800;
  }
`
