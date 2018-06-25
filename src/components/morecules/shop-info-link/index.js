// @flow
import React from 'react'
import styled from 'styled-components'
import { InfoIcon } from '../../atoms/info-icon'
import { Balloon } from '../../atoms/balloon'

type Props = {|
  +onClick: Function,
|}

export const ShopInfoLink = ({ onClick }: Props) => (
  <Container
    onClick={onClick}
    className='text-center position-absolute'
  >
    <InfoIcon />
    <BalloonContainer>
      <Balloon
        text='お店情報'
      />
    </BalloonContainer>
  </Container>
)

const Container = styled.div`
  cursor: pointer;
`

const BalloonContainer = styled.div`
  margin-top: 0.7em;
`
