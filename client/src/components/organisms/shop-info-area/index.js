// @flow
import React from 'react'
import styled from 'styled-components'
import { TipsHeader } from '../../atoms/tips-header'
import { ShopInfoColumn } from '../../atoms/shop-info-column'

export const ShopInfoArea = () => (
  <Container>
    <TipsHeader
      title='お店の情報'
    />
    <ShopInfoColumn
    />
  </Container>
)

const Container = styled.div`
  width: 100%;
`
