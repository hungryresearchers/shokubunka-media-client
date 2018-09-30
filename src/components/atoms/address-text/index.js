// @flow
import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../../styles/colors'
import { FONT_FAMILY } from '../../styles/font-family.css'
import { media } from '../../../utils/styles'

const { GRAY } = COLORS
const { YUGOTHIC } = FONT_FAMILY

export type Props = {|
  postalCode: ?string,
  address: ?string,
|}

export const AddressText = ({ postalCode, address }: Props) => (
  <LinkToGoogleMap
    postalCode={postalCode}
    address={address}
  >
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
  href: props => `https://www.google.co.jp/maps/place/${props.postalCode + '+' + props.address}`,
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

  @media ${media.small} {
    font-size: 0.7em;
    letter-spacing: 0.7px;
  }
`

const Text = styled.div``
