// @flow
import React from 'react'
import styled from 'styled-components'
import { FONT_FAMILY } from '../../styles/font-family.css'

const { YUGOTHIC } = FONT_FAMILY

type Props = {|
  +releasedDate: string,
|}

export const ReleasedDate = ({ releasedDate }: Props) => (
  <Text className='float-right'>
    { releasedDate }
  </Text>
)

const Text = styled.div`
  ${YUGOTHIC}
  font-size: 0.8em;
  font-weight: 300;
  opacity: 0.7;
`
