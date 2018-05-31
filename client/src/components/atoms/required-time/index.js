// @flow
import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../../styles/colors'
import { FONT_FAMILY } from '../../styles/font-family.css'

const { GRAY } = COLORS
const { AVENIR } = FONT_FAMILY

type Props = {|
  +requiredTime: number,
|}

export const RequiredTime = ({ requiredTime }: Props) => (
  <Text>
    金町駅から徒歩
    <TimeText
      className='font-weight-bold'
    >
      { requiredTime }
    </TimeText>
    分
  </Text>
)

const Text = styled.p`
  ${AVENIR};
  color: ${GRAY};
  font-size: 1.1em;
`

const TimeText = styled.span``
