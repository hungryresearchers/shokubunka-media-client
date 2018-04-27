// @flow
import React from 'react'
import styled from 'styled-components'
import { FONT_FAMILY } from '../../styles/font-family.css'
import BACKGROUND_IMG from '../../images/top-background.jpg'

const { ZOUSAN } = FONT_FAMILY

export const HeaderTitle = () => (
  <Container className='d-flex align-items-center justify-content-center'>
    <TextContainer>
      <TitleUpper>
        カ ナ マ チ
      </TitleUpper>
      <TitleBottom>
        ショクブ ンカ
      </TitleBottom>
    </TextContainer>
  </Container>
)

const Container = styled.div`
  height: 46vh;
  background-image: url(${BACKGROUND_IMG});
  background-repeat: no-repeat;
  background-size: cover;
`

const TextContainer = styled.div`
  height: 38vh;
`

const zousan = `
  ${ZOUSAN}
  padding: 0;
  margin: 0;
  margin-bottom : 1vh;
  color: #fdeec2;
  text-shadow : 2px 5px 0px #F04220;
`

const TitleUpper = styled.h1`
  ${zousan}
  font-size: 6em;
`

const TitleBottom = styled.h2`
  ${zousan}
  font-size: 4em;
`
