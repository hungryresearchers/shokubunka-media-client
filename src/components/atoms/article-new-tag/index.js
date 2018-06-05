// @flow
import React from 'react'
import styled from 'styled-components'
import { FONT_FAMILY } from '../../styles/font-family.css'

const { OBLIQUE } = FONT_FAMILY

export const ArticleNewTag = () => (
  <Container>
    <Text>
      NEW
    </Text>
  </Container>
)

const Container = styled.div`
  position: absolute;
  background-color: rgba(232, 92, 63, 1);
  top: 20%;
  padding: 0.4em 1.5em;
  padding-left: 3em;
`

const Text = styled.p`
  font-size: 1.2em;
  color: white;
  font-weight: 600;
  ${OBLIQUE}
  padding: 0;
  margin: 0;
`
