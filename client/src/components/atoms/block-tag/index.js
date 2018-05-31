// @flow
import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../../styles/colors'
import { FONT_FAMILY } from '../../styles/font-family.css'

const { GRAY, WHITE } = COLORS
const { TOPPANBUNKYU } = FONT_FAMILY

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
`

const Text = styled.p`
  ${TOPPANBUNKYU}
  color: ${WHITE};
  font-size: 1.1em;
  font-weight: 600;
  margin: 0;
  padding: 0;
`
