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
)

const Container = styled.div`
  ${YUGOTHIC};
  color: ${GRAY};
  font-size: 0.8em;
  letter-spacing: 0.8px;
  line-height: 1.8em;
`

const Text = styled.div``
