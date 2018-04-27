// @flow
import React from 'react'
import styled from 'styled-components'
import { FONT_FAMILY } from '../../styles/font-family.css'

const { YUGOTHIC } = FONT_FAMILY

type Props = {|
  +date: string,
|}

export const ReleasedDate = ({ date }: Props) => (
  <Text className='float-right'>
    { date }
  </Text>
)

const Text = styled.div`
  ${YUGOTHIC}
  font-size: 0.9em;
`
