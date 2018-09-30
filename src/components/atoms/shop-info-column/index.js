// @flow
import * as React from 'react'
import styled from 'styled-components'
import { media } from '../../../utils/styles'

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

const Left = styled.div``

const Right = styled.div``

const Container = styled.div`
  @media ${media.small} {
    padding-left: 0.2em;
    ${Left}, ${Right} {
      width: auto;
    }

    ${Right} {
      padding-left: 0.4em;
    }
  }
`