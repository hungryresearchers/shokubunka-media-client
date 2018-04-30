// @flow
import React from 'react'
import styled from 'styled-components'
import { FONT_FAMILY } from '../../styles/font-family.css'

const { YUGOTHIC } = FONT_FAMILY

type Props = {|
  +releasedDate: string,
  fontSize?: string,
|}

export const ReleasedDate = ({ releasedDate, fontSize }: Props) => (
  <Text
    className='float-right'
    fontSize={fontSize}
  >
    { releasedDate }
  </Text>
)

const Text = styled.div`
  ${YUGOTHIC}
  font-size: ${props => props.fontSize ? props.fontSize : '0.8em'};
  font-weight: 300;
  opacity: 0.7;
`
