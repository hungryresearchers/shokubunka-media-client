// @flow
import React from 'react'
import styled from 'styled-components'
import { FONT_FAMILY } from '../../styles/font-family.css'
import { formatReleasedDate } from '../../../utils'
import { media } from '../../../utils/styles'

const { YUGOTHIC } = FONT_FAMILY

type Props = {|
  +releasedDate: string,
  fontSize?: string,
  color?: string
|}

export const ReleasedDate = ({ releasedDate, fontSize, color }: Props) => (
  <Text
    fontSize={fontSize}
    color={color}
  >
    { formatReleasedDate(releasedDate) }
  </Text>
)

const Text = styled.div`
  ${YUGOTHIC}
  font-size: ${props => props.fontSize ? props.fontSize : '0.8em'};
  font-weight: 300;
  opacity: 0.7;
  color: ${props => props.color || 'rgba(76, 76, 70, 1)'};

  @media ${media.small} {
    font-size: 0.6em;
  }
`
