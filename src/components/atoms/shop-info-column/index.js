// @flow
import * as React from 'react'
import styled from 'styled-components'

type Props = {|
  +IconComponent: () => ?React$Element<any>,
  +DescriptionComponent: () => React$Element<any>,
|}

export const ShopInfoColumn = ({ IconComponent, DescriptionComponent }: Props) => (
  <Container
    className='row d-flex'
  >
    <Left
      className='col-sm-1'
    >
      <IconComponent />
    </Left>
    <Right
      className="col-sm-11"
    >
      <DescriptionComponent />
    </Right>
  </Container>
)

const Container = styled.div``

const Left = styled.div``

const Right = styled.div``
