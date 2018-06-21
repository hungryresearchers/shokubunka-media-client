// @flow
import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../../styles/colors'
import { FONT_FAMILY } from '../../styles/font-family.css'

const { GRAY } = COLORS
const { YUGOTHIC } = FONT_FAMILY

export type Props = {|
  postalCode: ?string,
  address: ?string,
|}

export const AddressText = ({ postalCode, address }: Props) => (
  <LinkToGoogleMap>
    <Container>
      <Text
        className='font-weight-bold'
      >
        { postalCode }
      </Text>
      <Text
        className='font-weight-bold'
      >
        { address }
      </Text>
    </Container>
  </LinkToGoogleMap>
)

const LinkToGoogleMap = styled.a.attrs({
  href: 'https://www.google.co.jp/maps/place/%E3%80%92150-0011+%E6%9D%B1%E4%BA%AC%E9%83%BD%E6%B8%8B%E8%B0%B7%E5%8C%BA%E6%9D%B1%EF%BC%91%E4%B8%81%E7%9B%AE%EF%BC%92%E2%88%92%EF%BC%92%EF%BC%90/',
  target: '_blank',
})`
  &:hover {
    text-decoration: underline;
    text-decoration-color: ${GRAY};
  }
`

const Container = styled.div`
  ${YUGOTHIC};
  color: ${GRAY};
  font-size: 0.8em;
  letter-spacing: 0.8px;
  line-height: 1.8em;
`

const Text = styled.div``
