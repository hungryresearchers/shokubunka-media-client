// @flow
import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../../styles/colors'
import { FONT_FAMILY } from '../../styles/font-family.css'

const { GRAY_PALE, GRAY } = COLORS
const { YUGOTHIC } = FONT_FAMILY

type Props = {|
  +title: string,
|}

export const TipsHeader = ({ title }: Props) => (
  <Container>
    <Title>
      { title }
    </Title>
    <BottomBorder
      className='m-0'
    />
  </Container>
)

const Container = styled.div`
  margin-bottom: 2vh;
`

const Title = styled.h2`
  ${YUGOTHIC}
  color: ${GRAY};
  font-size: 1.5em;
  font-weight: 600;
  padding-bottom: 2vh;
  border-bottom: 0.3em solid #dcdcdb;
  margin-bottom: 0.15em;
`

const BottomBorder = styled.hr`
  border-top: 0.15em solid ${GRAY_PALE};
`
