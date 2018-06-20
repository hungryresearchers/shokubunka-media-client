// @flow
import React, { Fragment } from 'react'
import styled from 'styled-components'
import { COLORS } from '../../styles/colors'
import { FONT_FAMILY } from '../../styles/font-family.css'

const { GRAY } = COLORS
const { AVENIR } = FONT_FAMILY

export type Holiday = string | string[]
export type Props = {|
  +open: string,
  +close: string,
  +holiday: ?Holiday,
|}

export const WeeklyText = ({ open, close, holiday }: Props) => (
  <Container>
    <BusinessHours
      className='font-weight-bold'
    >
      { open }
      ~
      { close }
    </BusinessHours>
    {
      holiday
        ? (
          <Fragment>
            <Day
              className='font-weight-bold'
            >
              { holiday }曜
            </Day>
            定休日
          </Fragment>
        )
        : '定休日なし'
    }
  </Container>
)

const Container = styled.p`
  font-size: 1.1em;
  ${AVENIR};
  color: ${GRAY};
`

const BusinessHours = styled.span`
  margin-right: 0.9vw;
`

const Day = styled.span``
