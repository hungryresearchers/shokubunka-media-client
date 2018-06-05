// @flow
import React from 'react'
import styled from 'styled-components'
import { TipsHeader } from '../../atoms/tips-header'
import { ShopInfoColumn } from '../../atoms/shop-info-column'
import { PhoneIcon } from '../../atoms/phone-icon'
import { PhoneNumber } from '../../atoms/phone-number'
import { ClockIcon } from '../../atoms/clock-icon'
import { WeeklyText } from '../../atoms/weekly-text'

type Props = {|
  +phoneNumber: {
    +number: string
  },
|}

export const ShopInfoArea = ({ phoneNumber }: Props) => (
  <Container>
    <TipsHeader
      title='お店の情報'
    />
    <ShopInfoColumn
      IconComponent={() => (<PhoneIcon />)}
      DescriptionComponent={() => (
        <PhoneNumber
          number={phoneNumber.number}
        />
      )}
    />
    <ShopInfoColumn
      IconComponent={() => (<ClockIcon/>)}
      DescriptionComponent={() =>  (
        <WeeklyText
          open={open}
          close={close}
          holiday=
        />
      )}
    />
  </Container>
)

const Container = styled.div`
  width: 100%;
`
